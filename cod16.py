import os
import time
import sys
import pyperclip
import pygetwindow as gw
import subprocess
import keyboard
import pyautogui
import bot138
import bot144
import shutil
import configparser
import ctypes
import signal
import webbrowser
from threading import Thread, Timer
from flask import Flask, render_template, request, jsonify, redirect, url_for, session, send_from_directory
from waitress import serve
from ctypes import windll, WINFUNCTYPE, c_int, c_void_p, c_ulong, c_uint

CONFIG_FILE = 'Herta-Launcher-16-config.ini'

config = configparser.ConfigParser()
config['SETTINGS'] = {
    'post': '5000',  # 默认端口
    'debug_flask': 'False', # Flask 调试模式(开:True,关:False)
    'start_mode': 'False', # Flask 的启动模式(Flask:True,Waitress:False)
    'debug': 'False', # 黑塔终端的调试模式(开:True,关:False)
    'hide_console': 'False', # 隐藏CMD
    'admin': 'True', # 申请管理员权限
    'close_steam': 'False', # 启动游戏时关闭Steam
    'game_path': '' # 游戏路径
}
config.read(CONFIG_FILE)
# 获取配置值（带类型转换和默认值）
flask_port = config.getint('SETTINGS', 'post', fallback=5000)
flask_debug = config.getboolean('SETTINGS', 'debug_flask', fallback=False)
flask_start_mode = config.getboolean('SETTINGS', 'start_mode', fallback=False)
DEV_MODE = config.getboolean('SETTINGS', 'debug', fallback=False)
hide_ini_console = config.getboolean('SETTINGS', 'hide_console', fallback=False)
admin_ini = config.getboolean('SETTINGS', 'admin', fallback=True)

with open(CONFIG_FILE, 'w') as f:
    config.write(f)

# 初始化全局变量
launcher_title = '黑塔终端 GUI II V2.8.0 Beta 2'
app = Flask(__name__)
exit_flag = False
bot_exit_flag = False
is_modify_end = False
bot_thread = None
version_title = {
    "1.44": "IW8 1.44 Offline v0.1 by .r4v3n",
    "1.38": {
        "v0.1": "IW8 1.38 Offline v0.1 by .r4v3n",
        "v0.2": "IW8 1.38 Offline v0.2 by .r4v3n",
        "v0.3": "IW8 1.38 Offline v0.3 by .r4v3n",
        "zh": "蔚藍檔案 - 所有奇跡的起點"
    },
    "1.67": {
        "v0.1": "IW8 Steam (5-13-2024) Offline v1 by .r4v3n",
        "v0.2": "IW8 Steam (5-13-2024) Offline v2 by .r4v3n",
        "v0.3": "IW8 Steam (5-13-2024) Offline v3 by .r4v3n"
    }
}
sub_versions = ["zh", "v0.3", "v0.2", "v0.1"]
bat_content = '''@echo off
rem 设置参数变量和VBS脚本路径
set "params=%*"
set "vbs=%~dp0getadmin.vbs"
cd /d "%~dp0"

rem 如果存在旧的vbs文件则删除
if exist "%vbs%" del "%vbs%"

rem 检查是否需要管理员权限，如果需要则创建vbs脚本提权
fsutil dirty query %systemdrive% >nul 2>nul || (
    echo Set UAC = CreateObject^("Shell.Application"^) : UAC.ShellExecute "%~s0", "%params%", "", "runas", 1 >> "%vbs%"
    rem 执行提权操作
    "%vbs%"
    rem 删除临时vbs文件
    del "%vbs%"
    exit /B
)

rem 设置反作弊驱动和游戏执行文件名
set DRIVERNAME=atvi-brynhildr_steam_iw8
set EXENAME=ModernWarfare.exe

rem 检查反作弊驱动是否已安装
sc query %DRIVERNAME% >nul 2>&1
if %errorlevel%==0 (
    echo [信息] 反作弊驱动已安装：%DRIVERNAME%
    goto startgame
) else (
    goto install_ac_driver
)

:install_ac_driver
rem 安装反作弊驱动
sc.exe create %DRIVERNAME% type= kernel binPath="%CD%\\brynhildr.sys"
rem 设置驱动程序安全描述符
sc.exe sdset %DRIVERNAME% D:(A;;CCLCSWRPWPDTLOCRRC;;;SY)(A;;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;BA)(A;;CCLCSWRPWPLOCRRC;;;IU)(A;;CCLCSWLOCRRC;;;SU)S:(AU;FA;CCDCLCSWRPWPDTLOCRSDRCWDWO;;;WD)
echo [成功] 反作弊驱动安装完成：%DRIVERNAME%

:startgame
rem 启动游戏进程
echo ===== 重要提示 =====
echo 请保持此窗口开启状态！
echo 关闭窗口将导致反作弊驱动无法正常卸载
echo ===================
bootstrapper.exe %EXENAME%

rem 游戏结束后卸载反作弊驱动
echo [卸载] 正在删除反作弊驱动: %DRIVERNAME%
echo [卸载] 正在删除 .R4v3n Goldberg Steam Emulator 补丁缓存: %APPDATA%\\r4v3n_steam_files
sc.exe delete %DRIVERNAME%
rd /s /q %APPDATA%\\r4v3n_steam_files
rem 驱动卸载等待
timeout /t 1 /nobreak >nul
echo [完成] 反作弊驱动已安全卸载，窗口即将关闭...
timeout /t 3 /nobreak >nul'''

# 初始化变量
# 定义WinAPI类型和函数
user32 = windll.user32
HWND = c_void_p
DWORD = c_ulong
BOOL = c_int

# 定义SetWindowPos函数原型
SetWindowPos = user32.SetWindowPos
SetWindowPos.argtypes = [HWND, HWND, c_int, c_int, c_int, c_int, c_uint]
SetWindowPos.restype = BOOL

# 常量定义
HWND_TOPMOST = -1
HWND_NOTOPMOST = -2
SWP_NOSIZE = 0x0001
SWP_NOMOVE = 0x0002
SWP_SHOWWINDOW = 0x0040

camo_map = {
    '0': 'camo_mp_t9mastery_gold', # 金(17)
    '1': 'camo_mp_t9mastery_diamond', # 钻石(18)
    '2': 'camo_mp_t9mastery_darkmatter', # 暗物质
    '3': 'camo_zm_t9mastery_darkmatter', # 黑暗以太(17)
    '4': 'camo_zm_t9mastery_diamond', # 瘟疫钻石(17)
    '5': 'camo_11a', # 金(16)
    '6': 'camo_11b', # 白金
    '7': 'camo_11c', # 大马士革
    '8': 'camo_11d', # 黑曜石
    '9': 's4_camo_11b_zm', # 瘟疫钻石(18)
    '10': 'camo_zm_t9mastery_gold', # 金蝰蛇
    '11': 's4_camo_11a', # 金(18)
    '12': 's4_camo_11b', # 钻石(18)
    '13': 's4_camo_11c', # 原子
    '14': 's4_camo_00a', # 未发行钻石(18)
    '15': 's4_camo_11a_zm', # 金毒蛇
    '16': 's4_camo_11c_zm', # 黑暗以太(18)
}

mode_map = {
    '0': 'setPrivateLoadout',
    '1': 'setPrivateWZLoadout'
}

hw_map = {
    "1": "seta lui_show_ar_t9slowfire 1;seta weapon_unlock_ar_t9slowfire_enabled 1;seta lui_show_ar_t9british 1;seta weapon_unlock_ar_t9british_enabled 1;seta lui_show_ar_t9season6 1;seta weapon_unlock_ar_t9season6_enabled 1;seta lui_show_ar_t9soviet 1;seta weapon_unlock_ar_t9soviet_enabled 1;seta lui_show_sm_t9spray 1;seta weapon_unlock_sm_t9spray_enabled 1;seta lui_show_sm_t9cqb 1;seta weapon_unlock_sm_t9cqb_enabled 1;seta lui_show_sm_t9semiauto 1;seta weapon_unlock_sm_t9semiauto_enabled 1;seta lui_show_sm_t9season6 1;seta weapon_unlock_sm_t9season6_enabled 1;seta lui_show_sm_t9flechette 1;seta weapon_unlock_sm_t9flechette_enabled 1;seta lui_show_sh_t9leveraction 1;seta weapon_unlock_sh_t9leveraction_enabled 1;seta lui_show_lm_t9fastfire 1;seta weapon_unlock_lm_t9fastfire_enabled 1;seta lui_show_sn_t9accurate 1;seta weapon_unlock_sn_t9accurate_enabled 1;seta lui_show_pi_t9fullauto 1;seta weapon_unlock_pi_t9fullauto_enabled 1;seta lui_show_pi_t9pistolshot 1;seta weapon_unlock_pi_t9pistolshot_enabled 1;seta lui_show_me_t9ballisticknife 1;seta weapon_unlock_me_t9ballisticknife_enabled 1;seta lui_show_sm_t9nailgun 1;seta weapon_unlock_sm_t9nailgun_enabled 1;seta lui_show_me_t9bat 1;seta weapon_unlock_me_t9bat_enabled 1;seta lui_show_me_t9mace 1;seta weapon_unlock_me_t9mace_enabled 1;seta lui_show_me_t9cane 1;seta weapon_unlock_me_t9cane_enabled 1;seta lui_show_me_t9sai 1;seta weapon_unlock_me_t9sai_enabled 1;seta lui_show_me_t9battleaxe 1;seta weapon_unlock_me_t9battleaxe_enabled 1;seta lui_show_me_t9coldwar 1;seta weapon_unlock_me_t9coldwar_enabled 1;seta lui_show_me_t9scythe 1;seta weapon_unlock_me_t9scythe_enabled 1;seta lui_show_lm_slima 1;seta weapon_unlock_lm_slima_enabled 1;seta lui_show_sm_echo 1;seta weapon_unlock_sm_echo_enabled 1",
    "2": "seta lui_show_ar_t9slowfire 0;seta weapon_unlock_ar_t9slowfire_enabled 0;seta lui_show_ar_t9british 0;seta weapon_unlock_ar_t9british_enabled 0;seta lui_show_ar_t9season6 0;seta weapon_unlock_ar_t9season6_enabled 0;seta lui_show_ar_t9soviet 0;seta weapon_unlock_ar_t9soviet_enabled 0;seta lui_show_sm_t9spray 0;seta weapon_unlock_sm_t9spray_enabled 0;seta lui_show_sm_t9cqb 0;seta weapon_unlock_sm_t9cqb_enabled 0;seta lui_show_sm_t9semiauto 0;seta weapon_unlock_sm_t9semiauto_enabled 0;seta lui_show_sm_t9season6 0;seta weapon_unlock_sm_t9season6_enabled 0;seta lui_show_sm_t9flechette 0;seta weapon_unlock_sm_t9flechette_enabled 0;seta lui_show_sh_t9leveraction 0;seta weapon_unlock_sh_t9leveraction_enabled 0;seta lui_show_lm_t9fastfire 0;seta weapon_unlock_lm_t9fastfire_enabled 0;seta lui_show_sn_t9accurate 0;seta weapon_unlock_sn_t9accurate_enabled 0;seta lui_show_pi_t9fullauto 0;seta weapon_unlock_pi_t9fullauto_enabled 0;seta lui_show_pi_t9pistolshot 0;seta weapon_unlock_pi_t9pistolshot_enabled 0;seta lui_show_me_t9ballisticknife 0;seta weapon_unlock_me_t9ballisticknife_enabled 0;seta lui_show_sm_t9nailgun 0;seta weapon_unlock_sm_t9nailgun_enabled 0;seta lui_show_me_t9bat 0;seta weapon_unlock_me_t9bat_enabled 0;seta lui_show_me_t9mace 0;seta weapon_unlock_me_t9mace_enabled 0;seta lui_show_me_t9cane 0;seta weapon_unlock_me_t9cane_enabled 0;seta lui_show_me_t9sai 0;seta weapon_unlock_me_t9sai_enabled 0;seta lui_show_me_t9battleaxe 0;seta weapon_unlock_me_t9battleaxe_enabled 0;seta lui_show_me_t9coldwar 0;seta weapon_unlock_me_t9coldwar_enabled 0;seta lui_show_me_t9scythe 0;seta weapon_unlock_me_t9scythe_enabled 0;seta lui_show_lm_slima 0;seta weapon_unlock_lm_slima_enabled 0;seta lui_show_sm_echo 0;seta weapon_unlock_sm_echo_enabled 0"
}

wz_config = {
    "p1": "set QTQRQPLNK",
    "p2": "set MLQNQTRRTK",
    "p3": "exec br_core.cfg;seta OLKMKMTKRO"
}

hide_map = {
    "1": "NSQLTTMRMP mp_herat",
    "2": "NSQLTTMRMP mp_m_drainage"
}

wz_g_map = {
    "y": "set scr_br_loadout_option \"standardammo\";set scr_br_allowLoadout 1;set scr_br_use_set_loadouts 1;set scr_br_allowLoadoutOnlyInPreLobby 0;exec br_core.cfg;br_minplayers 0;scr_br_gametype dmz;set QTQRQPLNK 1;set MLQNQTRRTK 1;exec br_core.cfg;seta OLKMKMTKRO 1",
    "n": "set scr_br_loadout_option \"standardammo\";set scr_br_allowLoadout 0;set scr_br_use_set_loadouts 0;set scr_br_allowLoadoutOnlyInPreLobby 1;exec br_core.cfg;br_minplayers 1;scr_br_gametype dmz;set QTQRQPLNK 0;set MLQNQTRRTK 0;exec br_core.cfg"
}

global_cmd = {
    "person": 'NOSLRNTRKL',
    "fov": "NSSLSNKPN",
    "vg": "LTOKRMRTMM",
    "unlock": "seta OLKMKMTKRO"
}
os.system('title ' + launcher_title + ' - Console')

class ConfigEditor:
    def __init__(self, file_path):
        self.file_path = file_path
        self.config = configparser.ConfigParser()
        self.config.optionxform = str
        self.config.read(file_path, encoding='utf-8')
    
    def get_value(self, section, key):
        return self.config.get(section, key)
    
    def set_value(self, section, key, value):
        if not self.config.has_section(section):
            self.config.add_section(section)
        self.config.set(section, key, value)
    
    def save(self):
        with open(self.file_path, 'w', encoding='utf-8') as configfile:
            self.config.write(configfile, space_around_delimiters=False)

def run_flask_server():
    """在独立线程中启动Flask服务器"""
    print("网页已激活，按下 Ctrl + H 可快速打开网页")
    if flask_start_mode:  # 调试模式用原生Flask
        app.run(host='0.0.0.0', port=flask_port, debug=flask_debug, threaded=True)
    else:                 # 生产模式用Waitress
        serve(app, host='0.0.0.0', port=flask_port, threads=8)

def defender_white(path):
    """将路径添加到Windows Defender白名单(不改变原始变量值)"""
    # 使用临时变量处理路径（不改变original_path）
    target_path = os.path.abspath(path)
    
    # 路径验证：确保路径存在
    if not os.path.exists(target_path):
        return f"错误 - 路径不存在: '{target_path}' (原始输入: '{path}')"
    
    # 路径转换：计算实际白名单路径
    effective_path = os.path.dirname(target_path) if os.path.isfile(target_path) else target_path
    
    # 构造PowerShell命令
    ps_command = f'Add-MpPreference -ExclusionPath "{effective_path}"'
    
    # 配置执行策略
    command = [
        'powershell.exe',
        '-ExecutionPolicy', 'Bypass',
        '-Command', ps_command
    ]
    
    try:
        # 以管理员权限执行
        subprocess.run(command, check=True, shell=True)
        
        # 创建结果信息（包含原始路径信息）
        result_msg = f"成功 - 已将文件夹 '{effective_path}' 添加到白名单"
        if path != effective_path:
            result_msg += f"\n(输入路径是: '{path}' - 已自动转换为包含文件夹)"
            
        return result_msg
    except subprocess.CalledProcessError as e:
        return f"错误 - 添加失败: {e}\n(尝试添加的路径: '{effective_path}')"
    except Exception as e:
        return f"错误 - 发生未知错误: {str(e)}\n(路径信息: 输入 '{path}', 目标 '{effective_path}')"

def close_python():
    Timer(1, lambda: os.kill(os.getpid(), signal.SIGINT)).start()

def is_admin():
    """检查当前是否以管理员权限运行"""
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def request_admin_restart():
    if DEV_MODE == True:
        print("当前为调试模式已跳过申请管理员权限\n" + "-"*40)
    else:
        if not is_admin():
            """请求管理员权限并重启程序"""
            print("程序需要管理员权限，正在请求提升权限...\n" + "-"*40)
            ctypes.windll.shell32.ShellExecuteW(None, "runas", sys.executable, " ".join(sys.argv), None, 1)
            sys.exit(0)

def OptionINI_flaskPost(flaskPost):
    try:
        config = ConfigEditor('Herta-Launcher-16-config.ini')
        config.set_value('SETTINGS', 'post', flaskPost)
        config.save()
        return f"成功 - 当前设置为: {flaskPost}"
    except Exception as e:
        return f"错误 - 设置失败: {str(e)}"

def OptionINI_flaskDebug(flaskDebug):
    try:
        config = ConfigEditor('Herta-Launcher-16-config.ini')
        config.set_value('SETTINGS', 'debug_flask', flaskDebug)
        config.save()
        return f"错误 - 当前设置为: {flaskDebug}"
    except Exception as e:
        return f"错误 - 设置失败: {str(e)}"
    
def OptionINI_flaskMode(flaskMode):
    try:
        config = ConfigEditor('Herta-Launcher-16-config.ini')
        config.set_value('SETTINGS', 'start_mode', flaskMode)
        config.save()
        if flaskMode:
            flaskMode_print = "Flask"
        else:
            flaskMode_print = "Waitress"
        return f"成功 - 当前设置为: {flaskMode_print}"
    except Exception as e:
        return f"错误 - 设置失败: {str(e)}"
    
def OptionINI_Debug(Debug):
    try:
        config = ConfigEditor('Herta-Launcher-16-config.ini')
        config.set_value('SETTINGS', 'debug', Debug)
        config.save()
        return f"成功 - 当前设置为: {Debug}"
    except Exception as e:
        return f"错误 - 设置失败: {str(e)}"

def OptionINI_hideConsole(Hide_Console):
    try:
        config = ConfigEditor('Herta-Launcher-16-config.ini')
        config.set_value('SETTINGS', 'hide_console', Hide_Console)
        config.save()
        return f"成功 - 当前设置为: {Hide_Console}"
    except Exception as e:
        return f"错误 - 设置失败: {str(e)}"

def OptionINI_Admin(Admin_frontend):
    try:
        config = ConfigEditor('Herta-Launcher-16-config.ini')
        config.set_value('SETTINGS', 'admin', Admin_frontend)
        config.save()
        return f"成功 - 当前设置为: {Admin_frontend}"
    except Exception as e:
        return f"错误 - 设置失败: {str(e)}"

def OptionINI_Close_Steam(CloseSteam):
    try:
        config = ConfigEditor('Herta-Launcher-16-config.ini')
        config.set_value('SETTINGS', 'close_steam', CloseSteam)
        config.save()
        return f"成功 - 当前设置为: {CloseSteam}"
    except Exception as e:
        return f"错误 - 设置失败: {str(e)}"

def active_window(target):
    target_window = gw.getWindowsWithTitle(target)
    try:
        target_window[0].activate()
    except Exception as e:
        print(f"窗口激活失败: {e}")
        target_window[0].minimize()
        target_window[0].restore()

def active_flask(topmost=None):
    while 1:
        if keyboard.is_pressed('ctrl') and keyboard.is_pressed('h'):
            webbrowser.open(f'http://localhost:{flask_port}')
        time.sleep(0.17)

def create_bat(target_dir=None):
    """创建bat文件，可指定目标目录"""
    if target_dir is None:
        target_dir = os.getcwd()
    
    bat_path = os.path.join(target_dir, '!start_cod.bat')
    print(f"正在 {target_dir} 创建 '!start_cod.bat' 文件")

    with open(bat_path, 'w') as f:
        f.write(bat_content)
    
    print(f"成功创建BAT文件: {bat_path}")
    return bat_path

def launch_game():
    try:
        # 获取配置路径
        game_path = config['SETTINGS'].get('game_path', '').strip()
        game_dir = os.path.dirname(game_path) if game_path and os.path.exists(game_path) else None
        
        # 优先检测自定义路径中的bootstrapper.exe
        bootstrapper_detected = False
        bootstrapper_dir = None
        
        # 1. 先检查自定义路径目录是否有bootstrapper.exe
        if game_dir and os.path.exists(game_dir):
            custom_bootstrapper = os.path.join(game_dir, 'bootstrapper.exe')
            if os.path.exists(custom_bootstrapper):
                bootstrapper_detected = True
                bootstrapper_dir = game_dir
                print(f"在自定义路径检测到 'bootstrapper.exe': {custom_bootstrapper}")
        
        # 2. 如果自定义路径没有，再检查当前目录
        if not bootstrapper_detected:
            current_dir = os.getcwd()
            current_bootstrapper = os.path.join(current_dir, 'bootstrapper.exe')
            if os.path.exists(current_bootstrapper):
                bootstrapper_detected = True
                bootstrapper_dir = current_dir
                print(f"在当前目录检测到 'bootstrapper.exe': {current_bootstrapper}")
        
        # 如果检测到bootstrapper.exe
        if bootstrapper_detected and bootstrapper_dir:
            # 定义bat文件路径
            bat_path = os.path.join(bootstrapper_dir, '!start_cod.bat')
            
            if DEV_MODE:
                return f"成功 - [调试模式] 检测到 V1.67 版本有效路径: {bat_path}"

            # 如果bat文件不存在则创建
            if not os.path.exists(bat_path):
                print(f"在 {bootstrapper_dir} 创建 Bat 文件")
                create_bat(target_dir=bootstrapper_dir)
            
            # 启动bat文件
            command = f'cmd /c "{bat_path}"'
            print(f"启动命令: {command} (工作目录: {bootstrapper_dir})\n" + '-'*40)
            subprocess.Popen(command, cwd=bootstrapper_dir, shell=True)
            return f"成功 - 正在启动游戏 (目录: {bootstrapper_dir})"
        
        # 如果没有bootstrapper.exe则使用默认方式启动
        if game_path and os.path.exists(game_path):
            game_dir = os.path.dirname(game_path)
            executable = game_path
        else:
            current_dir = os.getcwd()
            game_dir = current_dir
            executable = os.path.join(current_dir, 'ModernWarfare.exe')
        
        # 开发者模式处理
        if DEV_MODE:
            return f"成功 - [调试模式] 检测到有效路径: {executable}"
        
        # 检查路径是否存在
        if not os.path.exists(executable):
            return f"错误 - 路径不存在: {executable}"
        
        # 启动游戏
        print(f"直接启动游戏: {executable} (工作目录: {game_dir})")
        subprocess.Popen(executable, cwd=game_dir)
        return f"成功 - 游戏启动成功: {executable}"
        
    except Exception as e:
        import traceback
        traceback.print_exc()
        return f"错误 - 启动失败: {str(e)}"

def set_window_topmost(title, topmost=True):
    """设置窗口置顶状态"""
    try:
        win = gw.getWindowsWithTitle(title)[0]
        hwnd_top = HWND_TOPMOST if topmost else HWND_NOTOPMOST
        SetWindowPos(
            win._hWnd,
            hwnd_top,
            0, 0, 0, 0,
            SWP_NOMOVE | SWP_NOSIZE | SWP_SHOWWINDOW
        )
        return True
    except Exception as e:
        print(f"错误 - 窗口置顶操作失败: {e}")
        return False

def command(version, cmd, topmost=None):
    """
    发送命令到指定版本的游戏窗口
    :param version: 游戏版本 "1.44" 或 "1.38"
    :param cmd: 要发送的命令
    :param topmost: None-不修改置顶状态, True-置顶, False-取消置顶
    """
    try:
        if version == "1.44":
            window_title = version_title["1.44"]
            target_window = gw.getWindowsWithTitle(window_title)

        elif version == "1.67":
            for sub_ver in sub_versions:
                try:
                    current_title = version_title["1.67"][sub_ver]
                    target_window = gw.getWindowsWithTitle(current_title)
                    if target_window:
                        window_title = current_title
                        break
                except KeyError:
                    continue

        else:
            for sub_ver in sub_versions:
                try:
                    current_title = version_title["1.38"][sub_ver]
                    target_window = gw.getWindowsWithTitle(current_title)
                    if target_window:
                        window_title = current_title
                        break
                except KeyError:
                    continue
        
        if DEV_MODE == True:
            print("-"*40)
            print(f"发送命令:{cmd}")
            if topmost != None:
                print(f"窗口置顶状态: {'置顶' if topmost else '取消置顶'}") 
            print("-"*40)
            return f"成功 - [调试模式] 命令已发送: {cmd}"
        else:
            if not target_window:
                return "错误 - 未找到目标窗口，请确保游戏已运行"
            
            # 处理窗口置顶状态
            if topmost is not None:
                set_window_topmost(window_title, topmost)
                time.sleep(0.2)  # 等待置顶操作完成
            
            active_window(window_title)
            time.sleep(0.3)                # 等待聚焦
            pyautogui.hotkey('ctrlright', '/')  # 调出游戏控制台
            time.sleep(0.1)
            pyperclip.copy(cmd)
            time.sleep(0.1)                 # 复制指令
            pyautogui.hotkey('ctrl', 'v')
            time.sleep(0.3)                # 粘贴指令
            pyautogui.press('enter')       # 执行指令
            
            result_msg = f"成功 - 命令已发送到游戏窗口: {window_title}"
            if topmost is not None:
                result_msg += f" (已{'置顶' if topmost else '取消置顶'})"
            return result_msg
    except Exception as e:
        return f"错误 - 命令执行失败: {str(e)}"

def bot_modify(version):
    global bot_exit_flag, is_modify_end
    if version == "1.44":
        bot = bot144
    else:
        bot = bot138
    
    if not bot_exit_flag:
        is_modify_end = False
        bot.configure_and_lock(False)
        is_modify_end = True
    
    while not bot_exit_flag:
        time.sleep(0.2)
    
    bot.configure_and_lock(True)

def launch_bot(version, action):
    global bot_exit_flag, bot_thread
    
    if action == "start":
        if bot_thread is None or not bot_thread.is_alive():
            bot_exit_flag = False
            bot_thread = Thread(target=bot_modify, args=(version,), daemon=True)
            bot_thread.start()
            return "成功 - BOT修改已启动"
        else:
            return "错误 - BOT修改已在运行中"
    elif action == "stop":
        if bot_thread and bot_thread.is_alive():
            bot_exit_flag = True
            bot_thread.join()
            bot_thread = None
            return "成功 - BOT修改已停止"
        else:
            return "错误 - 没有正在运行的BOT修改"

def handle_camo(version, mode, tp, bag, wp):
    try:
        if mode not in mode_map:
            return "错误 - 无效模式"
        
        if version == "1.38" and tp in ["3", "4", "9", "10", "11", "12", "13", "14", "15", "16"]:
            return "错误 - 1.38版本不支持黑暗以太(COD17)、瘟疫钻石(COD17/COD18)、金蝰蛇(COD17)、黄金(COD18)、钻石(COD18)、原子(COD18)、未发行钻石(COD18)、金毒蛇(COD18)、瘟疫钻石(COD18)、黑暗以太(COD18)"
        
        if version == "1.44" and tp in ["9", "11", "12", "13", "14", "15", "16"]:
            return "错误 - 1.44版本不支持瘟疫钻石(COD18)、黄金(COD18)、钻石(COD18)、原子(COD18)、未发行钻石(COD18)、金毒蛇(COD18)、瘟疫钻石(COD18)、黑暗以太(COD18)"

        if tp not in camo_map:
            return "错误 - 无效迷彩类型"
        
        bags = []
        if bag == '~':
            bags = list(range(10))
        else:
            try:
                bag_num = int(bag)
                if 1 <= bag_num <= 10:
                    bags = [bag_num - 1]
                else:
                    return "错误 - 背包槽位必须在1~10之间"
            except ValueError:
                return "错误 - 无效的背包输入"
        
        weapon_slots = []
        if wp == '~':
            weapon_slots = [0, 1]
        else:
            try:
                wp_num = int(wp)
                if wp_num in [0, 1]:
                    weapon_slots = [wp_num]
                else:
                    return "错误 - 武器位置必须是0或1"
            except ValueError:
                return "错误 - 无效的武器位置"
        
        camo_cmds = []
        for slot in bags:
            for weapon in weapon_slots:
                cmd = f"{mode_map[mode]} loadouts {slot} weaponSetups {weapon} camo {camo_map[tp]}"
                camo_cmds.append(cmd)
        
        camo = ";".join(camo_cmds)
        return command(version, camo)
    except Exception as e:
        return f"错误 - 迷彩设置失败: {str(e)}"

def hide_console():
    startupinfo = subprocess.STARTUPINFO()
    startupinfo.dwFlags |= subprocess.STARTF_USESHOWWINDOW
    startupinfo.wShowWindow = subprocess.SW_HIDE
    subprocess.Popen(
        [sys.executable, "cod16.py"],
        startupinfo=startupinfo,
        creationflags=subprocess.CREATE_NO_WINDOW,
        stdout=subprocess.PIPE,  # 避免输出到终端
        stderr=subprocess.PIPE,
        stdin=subprocess.PIPE,
    )

def handle_unlock_selection(version, unlock_value):
    try:
        unlock = f"{global_cmd['unlock']} {unlock_value}"
        return command(version, unlock)
    except Exception as e:
        return f"错误 - 全解设置失败: {str(e)}"

def handle_volume_fog(version, vg_value):
    try:
        vg = f"{global_cmd['vg']} {vg_value}"
        return command(version, vg)
    except Exception as e:
        return f"错误 - 体积雾设置失败: {str(e)}"

def handle_hide_weapons(version, hw_value):
    try:
        hw = hw_map["1"] if hw_value == '1' else hw_map["2"]
        return command(version, hw)
    except Exception as e:
        return f"错误 - 隐藏武器设置失败: {str(e)}"

def handle_warzone_backpack(version, wz_value):
    try:
        wz = f"{wz_config['p1']} {wz_value};{wz_config['p2']} {wz_value};{wz_config['p3']} {wz_value}"
        return command(version, wz)
    except Exception as e:
        return f"错误 - 战区背包设置失败: {str(e)}"

def handle_hide_map(version, hm_value):
    try:
        if version == ["1.44"]:
            return "错误 - 此功能不支持 V1.44 版本"
        
        hmpp = hide_map["1"] if hm_value == '1' else hide_map["2"]
        return command(version, hmpp)
    except Exception as e:
        return f"错误 - 隐藏地图设置失败: {str(e)}"

def handle_fov(version, fov_value):
    try:
        fov_key = float(fov_value) * 0.01
        return command(version, f"{global_cmd['fov']} {fov_key}")
    except ValueError:
        return "错误 - 无效FOV值，请输入数字"
    except Exception as e:
        return f"错误 - FOV设置失败: {str(e)}"

def handle_gold_mode(version, gold_value):
    try:
        if gold_value == "y":
            return command(version, wz_g_map['y'])
        else:
            return command(version, wz_g_map['n'])
    except Exception as e:
        return f"错误 - 夺金模式设置失败: {str(e)}"

def handle_third_person(version, person_value):
    try:
        person = f"{global_cmd['person']} {person_value}"
        return command(version, person)
    except Exception as e:
        return f"错误 - 第三人称设置失败: {str(e)}"

def handle_coop(version):
    try:
        if version != "1.38":
            return "错误 - 此功能仅限 V1.38 版本"

        target_dir = os.path.join(os.getcwd(), 'main')
        
        if not os.path.exists(target_dir):
            return f"错误 - 目录 '{target_dir}' 不存在！"
        
        original_files = [
            'data1.dcache',
            'data0.dcache',
            'toc0.dcache',
            'toc1.dcache'
        ]
        
        processed_count = 0
        
        for filename in os.listdir(target_dir):
            file_path = os.path.join(target_dir, filename)
            
            if not os.path.isfile(file_path):
                continue
            
            if filename in original_files:
                backup_path = os.path.join(filename)
                shutil.copy2(file_path, backup_path)
                
                new_filename = filename + "_old"
                new_file_path = os.path.join(target_dir, new_filename)
                
                os.rename(file_path, new_file_path)
                processed_count += 1
        
        return f"成功 - 共处理了 {processed_count} 个文件"
    except Exception as e:
        return f"错误 - 解锁生存模式失败: {str(e)}"

def handle_sp(version):
    try:
        if version == "1.44":
            return "错误 - 此功能不支持 V1.44 版本"
        return command(version, "unlock_missions")
    except Exception as e:
        return f"错误 - 解锁失败: {str(e)}"

def handle_name(new_name):
    try:
        game_path = config['SETTINGS'].get('game_path', '').strip()
        game_dir = os.path.dirname(game_path) if game_path and os.path.exists(game_path) else None
        
        # 检测 bootstrapper.exe 的逻辑（与 launch_game 一致）
        bootstrapper_detected = False
        bootstrapper_dir = None
        
        # 1. 先检查游戏目录
        if game_dir and os.path.exists(game_dir):
            custom_bootstrapper = os.path.join(game_dir, 'bootstrapper.exe')
            if os.path.exists(custom_bootstrapper):
                bootstrapper_detected = True
                bootstrapper_dir = game_dir
        
        # 2. 检查当前目录
        if not bootstrapper_detected:
            current_dir = os.getcwd()
            current_bootstrapper = os.path.join(current_dir, 'bootstrapper.exe')
            if os.path.exists(current_bootstrapper):
                bootstrapper_detected = True
                bootstrapper_dir = current_dir
        
        # 如果检测到 bootstrapper.exe
        if bootstrapper_detected and bootstrapper_dir:
            # 使用 bootstrapper 的配置文件
            config_path = os.path.join(bootstrapper_dir, 'steam_settings', 'configs.user.ini')
            editor = ConfigEditor(config_path)
            editor.set_value('user::general', 'account_name', new_name)
            editor.save()
        else:
            # 使用原始配置文件
            if game_path == "" or not game_dir:
                editor = ConfigEditor('profile.ini')
            else:
                editor = ConfigEditor(os.path.join(game_dir, 'profile.ini'))
            editor.set_value('Settings', 'PlayerName', new_name)
            editor.save()
        return f"成功 - 玩家名已更改为: {new_name}"
        
    except Exception as e:
        return f"错误 - 名称设置失败: {str(e)}"

def close_game():
    try:
        process_name = "ModernWarfare.exe"
        subprocess.run(["taskkill", "/F", "/IM", process_name], check=True)
        return "成功 - 游戏已关闭"
    except subprocess.CalledProcessError:
        return "错误 - 无法终止游戏进程"

def check_and_launch_game():
    if version_title.get("1.44"):
        target_window = gw.getWindowsWithTitle(version_title["1.44"])
        if target_window:
            return '1.44'

    elif DEV_MODE == True:
        return 'DeBug'

    if version_title.get("1.38"):
        for sub_ver in sub_versions:  # 按优先级从高到低遍历
            # 跳过可能缺失的子版本
            if sub_ver not in version_title["1.38"]:
                continue
                
            target_window = gw.getWindowsWithTitle(version_title["1.38"][sub_ver])
            if target_window:
                return '1.38'
    
    if version_title.get("1.67"):
        for sub_ver in sub_versions:  # 按优先级从高到低遍历
            # 跳过可能缺失的子版本
            if sub_ver not in version_title["1.67"]:
                continue
                
            target_window = gw.getWindowsWithTitle(version_title["1.67"][sub_ver])
            if target_window:
                return '1.67'
            
    print(target_window)
    return None

#def download_game():


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/check_version', methods=['GET'])
def check_version_endpoint():
    try:
        version = check_and_launch_game()
        if version:
            return jsonify({"status": "success", "version": version})
        else:
            return jsonify({"status": "error", "message": "未检测到游戏运行"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

@app.route('/launch_game', methods=['POST'])
def launch_game_endpoint():
    try:
        result = launch_game()
        return jsonify({"status": "success" if "错误" not in result else "error", "message": result})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)})

@app.route('/set_camo', methods=['POST'])
def set_camo_endpoint():
    data = request.json
    version = data.get('version')
    mode = data.get('mode')
    camo_type = data.get('camo_type')
    bag = data.get('bag')
    weapon = data.get('weapon')
    
    result = handle_camo(version, mode, camo_type, bag, weapon)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_unlock', methods=['POST'])
def set_unlock_endpoint():
    data = request.json
    version = data.get('version')
    unlock_value = data.get('unlock_value')
    
    result = handle_unlock_selection(version, unlock_value)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_vog', methods=['POST'])
def set_vog_endpoint():
    data = request.json
    version = data.get('version')
    vog_value = data.get('vog_value')
    
    result = handle_volume_fog(version, vog_value)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_hide_weapons', methods=['POST'])
def set_hide_weapons_endpoint():
    data = request.json
    version = data.get('version')
    hide_value = data.get('hide_value')
    
    result = handle_hide_weapons(version, hide_value)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_warzone_bag', methods=['POST'])
def set_warzone_bag_endpoint():
    data = request.json
    version = data.get('version')
    wz_value = data.get('wz_value')
    
    result = handle_warzone_backpack(version, wz_value)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_fov', methods=['POST'])
def set_fov_endpoint():
    data = request.json
    version = data.get('version')
    fov_value = data.get('fov_value')
    
    result = handle_fov(version, fov_value)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_gold_mode', methods=['POST'])
def set_gold_mode_endpoint():
    data = request.json
    version = data.get('version')
    gold_value = data.get('gold_value')
    
    result = handle_gold_mode(version, gold_value)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_third_person', methods=['POST'])
def set_third_person_endpoint():
    data = request.json
    version = data.get('version')
    person_value = data.get('person_value')
    
    result = handle_third_person(version, person_value)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_coop', methods=['POST'])
def set_coop_endpoint():
    data = request.json
    version = data.get('version')

    result = handle_coop(version)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_sp', methods=['POST'])
def set_sp_endpoint():
    data = request.json
    version = data.get('version')

    result = handle_sp(version)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_white_list', methods=['POST'])
def set_white_list_endpoint():
    data = request.json
    way = data.get('way')
    manual_path = data.get('Manual_PATH')

    if way == "INI":
        path = config['SETTINGS'].get('game_path', '').strip()
    elif way == "Current":
        path = os.getcwd()
    else:
        path = manual_path

    result = defender_white(path)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_name', methods=['POST'])
def set_name_endpoint():
    data = request.json
    new_name = data.get('new_name')
    
    result = handle_name(new_name)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_Admin', methods=['POST'])
def set_Admin_endpoint():
    data = request.json
    Admin_frontend = data.get('Admin_frontend')
    
    result = OptionINI_Admin(Admin_frontend)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_CloseSteam', methods=['POST'])
def set_Close_Steam_endpoint():
    data = request.json
    CloseSteam = data.get('CloseSteam')
    
    result = OptionINI_Close_Steam(CloseSteam)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_GAME_PATH', methods=['POST'])
def set_OptionINI_GAME_PATH_endpoint():
    data = request.get_json()
    game_path = data.get('game_path', '').strip()
    
    if not game_path:
        return jsonify({"status": "error", "message": "路径不能为空"})
    
    # 标准化路径格式
    normalized_path = os.path.normpath(game_path)
    
    # 更新配置
    try:
        config['SETTINGS']['game_path'] = normalized_path
        with open(CONFIG_FILE, 'w') as f:
            config.write(f)
        return jsonify({"status": "success","message": f"游戏路径已保存: {normalized_path}","path": normalized_path})
    
    except Exception as e:
        return jsonify({"status": "error","message": f"保存失败: {str(e)}"})

@app.route('/set_Hide_Console', methods=['POST'])
def set_OptionINI_hideConsole_endpoint():
    data = request.json
    Hide_Console = data.get('Hide_Console')
    
    result = OptionINI_hideConsole(Hide_Console)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_POST', methods=['POST'])
def set_OptionINI_flaskPost_endpoint():
    data = request.json
    flaskPost = data.get('flaskPost')
    
    result = OptionINI_flaskPost(flaskPost)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_FLASK_DEBUG', methods=['POST'])
def set_OptionINI_flaskDebug_endpoint():
    data = request.json
    flaskDebug = data.get('flaskDebug')
    
    result = OptionINI_flaskDebug(flaskDebug)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_FLASK_MODE', methods=['POST'])
def set_OptionINI_flaskMode_endpoint():
    data = request.json
    flaskMode = data.get('flaskMode')
    
    result = OptionINI_flaskMode(flaskMode)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_DEBUG_MODE', methods=['POST'])
def set_OptionINI_Debug_endpoint():
    data = request.json
    DeBug = data.get('DeBug')
    
    result = OptionINI_Debug(DeBug)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_hide_map', methods=['POST'])
def set_hide_map_endpoint():
    data = request.json
    version = data.get('version')
    map_value = data.get('map_value')
    
    result = handle_hide_map(version, map_value)
    return jsonify({"status": "success" if "错误" not in result else "error", "message": result})

@app.route('/set_bot', methods=['POST'])
def set_bot_endpoint():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"status": "error", "message": "无效的请求数据"})
            
        version = data.get('version')
        friendly = data.get('friendly')  # 添加友军数量参数
        enemy = data.get('enemy')        # 添加敌军数量参数
        action = data.get('action')
        
        # 验证必需参数是否存在
        if not version or not action:
            return jsonify({"status": "error", "message": "缺少必要参数: 版本或操作类型"})
        
        # 根据版本选择对应的 bot 模块
        if version == "1.44":
            bot = bot144
        else:
            bot = bot138
        
        # 转换友方和敌方机器人数量
        friendly_int = int(friendly) if friendly and friendly.isdigit() else None
        enemy_int = int(enemy) if enemy and enemy.isdigit() else None

        if action == "start":
            # 设置 bot 数量值
            bot.set_bot_values(friendly_int, enemy_int)
            result = launch_bot(version, "start")
            return jsonify({"status": "success" if "错误" not in result else "error", "message": result})
        elif action == "stop":
            result = launch_bot(version, "stop")
            return jsonify({"status": "success" if "错误" not in result else "error", "message": result})
        else:
            return jsonify({"status": "error", "message": "无效的操作类型"})
            
    except Exception as e:
        return jsonify({"status": "error", "message": f"处理请求时出错: {str(e)}"})

@app.route('/close_program', methods=['POST'])
def close_program_endpoint():
    data = request.json
    close_type = data.get('close_type')
    
    if close_type == "game":
        result = close_game()
        return jsonify({"status": "success", "message": result})
    elif close_type == "program":
        result = close_python()
        return jsonify({"status": "success", "message": "程序即将关闭"})
    elif close_type == "all":
        result = close_game()
        close_python()
        return jsonify({"status": "success", "message": f"{result} 程序即将关闭"})
    else:
        return jsonify({"status": "error", "message": "无效的关闭类型"})

if __name__ == '__main__':
    if admin_ini == True:
        request_admin_restart()
    
    Thread(target=active_flask, daemon=True).start()
    
    if hide_ini_console == True:
        hide_console()
    
    webbrowser.open(f"http://localhost:{flask_port}")
    run_flask_server()