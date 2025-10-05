import ctypes
from ctypes import wintypes, c_void_p, POINTER, byref
import psutil
import time
import threading
import sys
from threading import Thread
from flask import Flask, render_template, request, jsonify, redirect, url_for, session

class color:
    red = '\033[31m'       # 红色
    green = '\033[32m'     # 绿色
    yellow = '\033[33m'    # 黄色
    reset = '\033[0m'      # 重置颜色

friendly_value = None
enemy_value = None
# 常量定义
PROCESS_ALL_ACCESS = 0x001F0FFF
kernel32 = ctypes.WinDLL('kernel32', use_last_error=True)
psapi = ctypes.WinDLL('psapi', use_last_error=True)

# 定义函数原型
OpenProcess = kernel32.OpenProcess
OpenProcess.argtypes = [wintypes.DWORD, wintypes.BOOL, wintypes.DWORD]
OpenProcess.restype = wintypes.HANDLE

ReadProcessMemory = kernel32.ReadProcessMemory
ReadProcessMemory.argtypes = [
    wintypes.HANDLE, wintypes.LPCVOID, wintypes.LPVOID, ctypes.c_size_t,
    POINTER(ctypes.c_size_t)
]
ReadProcessMemory.restype = wintypes.BOOL

WriteProcessMemory = kernel32.WriteProcessMemory
WriteProcessMemory.argtypes = [
    wintypes.HANDLE, wintypes.LPVOID, wintypes.LPCVOID, ctypes.c_size_t,
    POINTER(ctypes.c_size_t)
]
WriteProcessMemory.restype = wintypes.BOOL

CloseHandle = kernel32.CloseHandle
CloseHandle.argtypes = [wintypes.HANDLE]
CloseHandle.restype = wintypes.BOOL

EnumProcessModules = psapi.EnumProcessModules
EnumProcessModules.argtypes = [
    wintypes.HANDLE, POINTER(wintypes.HMODULE), wintypes.DWORD,
    POINTER(wintypes.DWORD)
]
EnumProcessModules.restype = wintypes.BOOL

GetModuleBaseName = psapi.GetModuleBaseNameA
GetModuleBaseName.argtypes = [
    wintypes.HANDLE, wintypes.HMODULE, wintypes.LPSTR, wintypes.DWORD
]
GetModuleBaseName.restype = wintypes.DWORD

# 更新内存地址配置
MEMORY_ADDRESSES = {
    "enemy_bot": ("ModernWarfare.exe", 0x16BD18A4, "uint32", "敌方机器人"),
    "friendly_bot": ("ModernWarfare.exe", 0x16BD18A3, "byte", "友方机器人"),
    "player_limit": ("ModernWarfare.exe", 0x143D78BC, "uint32", "房间人数上限")
}

# 锁定目标值
lock_values = {
    "enemy_bot": None,
    "friendly_bot": None,
    "player_limit": None
}

# 全局变量
process_handle = None
base_addresses = {}
lock_thread = None
lock_active = False

# 添加设置 BOT 值的函数
def set_bot_values(friendly, enemy):
    global friendly_value, enemy_value
    friendly_value = friendly
    enemy_value = enemy

def get_process_id(process_name):
    """获取进程ID"""
    for proc in psutil.process_iter(['pid', 'name']):
        if proc.name().lower() == process_name.lower():
            return proc.pid
    raise Exception(f"{color.red}进程未找到: {process_name}{color.reset}")

def get_module_base(process_handle, module_name):
    """获取模块基址"""
    h_modules = (c_void_p * 1024)()
    cb_needed = wintypes.DWORD()
    
    # 修复类型转换问题
    if not EnumProcessModules(process_handle, 
                             ctypes.cast(byref(h_modules), POINTER(wintypes.HMODULE)),
                             ctypes.sizeof(h_modules), 
                             byref(cb_needed)):
        raise ctypes.WinError(ctypes.get_last_error())
    
    num_modules = cb_needed.value // ctypes.sizeof(c_void_p)
    for i in range(num_modules):
        base_name = ctypes.create_string_buffer(256)
        if GetModuleBaseName(process_handle, h_modules[i], base_name, 
                            ctypes.sizeof(base_name)):
            if base_name.value.decode().lower() == module_name.lower():
                return h_modules[i]
    raise Exception(f"{color.red}模块未找到: {module_name}{color.reset}")

def read_memory(process_handle, address, data_type):
    """读取内存值"""
    buffer = None
    buffer_size = 0
    bytes_read = ctypes.c_size_t()
    
    if data_type == "uint32":
        buffer = ctypes.c_uint32()
        buffer_size = ctypes.sizeof(ctypes.c_uint32)
    elif data_type == "byte":
        buffer = ctypes.c_byte()
        buffer_size = ctypes.sizeof(ctypes.c_byte)
    else:
        raise ValueError(f"{color.red}不支持的数据类型: {data_type}{color.reset}")
    
    if not ReadProcessMemory(process_handle, address, byref(buffer), 
                           buffer_size, byref(bytes_read)):
        raise ctypes.WinError(ctypes.get_last_error())
    
    return buffer.value

def write_memory(process_handle, address, value, data_type):
    """写入内存值"""
    buffer = None
    buffer_size = 0
    bytes_written = ctypes.c_size_t()
    
    if data_type == "uint32":
        buffer = ctypes.c_uint32(value)
        buffer_size = ctypes.sizeof(ctypes.c_uint32)
    elif data_type == "byte":
        buffer = ctypes.c_byte(value)
        buffer_size = ctypes.sizeof(ctypes.c_byte)
    else:
        raise ValueError(f"{color.red}不支持的数据类型: {data_type}{color.reset}")
    
    if not WriteProcessMemory(process_handle, address, byref(buffer), 
                            buffer_size, byref(bytes_written)):
        raise ctypes.WinError(ctypes.get_last_error())
    
    return bytes_written.value

def lock_values_thread():
    """数值锁定线程"""
    global lock_active
    
    try:
        while lock_active:
            for name, target_value in lock_values.items():
                if target_value is not None:  # 只锁定设置了目标值的项
                    module, offset, dtype, display_name = MEMORY_ADDRESSES[name]
                    address = base_addresses[module] + offset
                    
                    # 读取当前值
                    current_value = read_memory(process_handle, address, dtype)
                    
                    # 如果值被改变，则恢复为目标值
                    if current_value != target_value:
                        write_memory(process_handle, address, target_value, dtype)
                        #print(f"[锁定] {display_name} 值被改为 {current_value}, 已恢复为 {target_value}")
            
            # 每秒检查一次
            time.sleep(1)
    except Exception as e:
        print(f"{color.red}锁定线程错误: {e}{color.reset}")
    finally:
        print("数值锁定已停止")

def setup_memory_access():
    """设置内存访问"""
    global process_handle, base_addresses
    
    try:
        # 获取进程ID
        pid = get_process_id("ModernWarfare.exe")
        print(f"{color.green}找到进程: ModernWarfare.exe (PID: {pid}){color.reset}")
        
        # 打开进程
        process_handle = OpenProcess(PROCESS_ALL_ACCESS, False, pid)
        if not process_handle:
            raise ctypes.WinError(ctypes.get_last_error())
        print(f"{color.green}进程句柄获取成功{color.reset}")
        
        # 获取模块基址
        for key, (module_name, _, _, _) in MEMORY_ADDRESSES.items():
            if module_name not in base_addresses:
                base_address = get_module_base(process_handle, module_name)
                base_addresses[module_name] = base_address
                print(f"模块 {module_name} 基址: 0x{base_address:016X}")
        print("-"*40)
        return True
    except Exception as e:
        print(f"{color.red}错误：初始化错误: {e}{color.reset}")
        print("bilibili:monocolotion")
        print("网站：monocolotion.xyz或者game.monocolotion.xyz")
        return False

def configure_and_lock(exit_flag):
    """配置并锁定数值模式 - 自动锁定列表数量上限和房间人数上限为200"""
    global lock_active, lock_thread, lock_values, process_handle, base_addresses
    global friendly_value, enemy_value
    
    if exit_flag == False:
        print("-"*40)
        print("========== COD16 V1.38 配置并锁定数值模式 ==========")
        print(f"{color.yellow}注意：列表数量上限和房间人数上限 将自动锁定为200{color.reset}")
        print("-"*40)

        # 初始化内存访问
        if not setup_memory_access():
            print(f"{color.red}错误：初始化内存访问失败，无法继续配置和锁定数值。{color.reset}")
            return
        # 显示当前值
        print("当前内存值:")
        for name, (module, offset, dtype, display_name) in MEMORY_ADDRESSES.items():
            address = base_addresses[module] + offset
            current_value = read_memory(process_handle, address, dtype)
            print(f"  {display_name}: {current_value}")
    
        # 自动设置限制项的锁定值
        for limit_name in ["player_limit"]:
            lock_values[limit_name] = 200
            _, _, _, display_name = MEMORY_ADDRESSES[limit_name]
            print(f"{display_name} 已设置为锁定值: 200")

        # 获取用户输入的其他锁定值
        print("-"*40)
        print("设置机器人的锁定值:")
        
        # 使用预设值设置机器人数量
        name = "friendly_bot"
        _, _, _, display_name = MEMORY_ADDRESSES[name]
        if friendly_value is not None:
            lock_values[name] = friendly_value
            print(f"{display_name} 将锁定为: {friendly_value}")
        else:
            lock_values[name] = None
            print(f"{display_name} 锁定已取消")
        
        name = "enemy_bot"
        _, _, _, display_name = MEMORY_ADDRESSES[name]
        if enemy_value is not None:
            lock_values[name] = enemy_value
            print(f"{display_name} 将锁定为: {enemy_value}")
        else:
            lock_values[name] = None
            print(f"{display_name} 锁定已取消")
    
        # 检查是否有配置锁定项
        any_locked = any(target is not None for target in lock_values.values())
        if not any_locked:
            print(f"{color.red}错误：没有配置任何锁定项，返回主菜单{color.reset}")
            return
    
        # 启动锁定线程
        print("\n启用的锁定项:")
        for name, target_value in lock_values.items():
            if target_value is not None:
                _, _, _, display_name = MEMORY_ADDRESSES[name]
                print(f"  {display_name}: 锁定为 {target_value}")
    
        lock_active = True
        lock_thread = threading.Thread(target=lock_values_thread, daemon=True)
        lock_thread.start()
    
    else:
        lock_active = False
        if lock_thread.is_alive():
            lock_thread.join()
        print("已退出锁定模式")
        if process_handle:
            CloseHandle(process_handle)
            print("进程句柄已关闭")
    
        # 重置锁定值
        for name in lock_values:
            lock_values[name] = None