# Herta-CODMW-GUI-II / 黑塔终端
> 属于 [**Herta-Launcher**](https://github.com/SLSYSL/Herta-Launcher) 系列：CODMW GUI II (使命召唤：现代战争 2019 - 游戏图形用户界面v2.0启动器)  
> 当前项目处于测试阶段，如果有问题请及时反馈

## 关于 Herta-Launcher 系列
一套游戏启动器，为玩家提供更好的体验

## 支持版本
- V1.67 (by .r4v3n)
- V1.44 (by .r4v3n)
- V1.38 (by .r4v3n)
- IW8-MOD (未来即将支持)

## 下载方式
方法一：前往 [QQ 用户交流反馈群聊](https://qm.qq.com/q/ieNMitTF7M) 群文件下载  
方法二：前往 Releases 下载  
方法三：[蓝奏云盘](https://wwyk.lanzoue.com/b00ro5re1a) 官方分流 (提取码: bub0)  
方法四：[123云盘](https://www.123684.com/s/mLFrVv-emQ43) 云影社区分流

## 如何开发
### 环境要求
1. Python 3.8 或更高版本
2. Windows 10 及以上

### 安装依赖
```bash
pip install -r requirements.txt
```

### 推荐打包方式与参数
- 使用 Nuitkal (官方默认打包方式)
```bash
@echo off
setlocal

set "SCRIPT_MAIN_NAME=cod16.py"
set "OUTPUT_NAME=[COD16]Herta-Launcher-16-GUI"
set "ICON_FILE=favicon.ico"
nuitka --standalone --onefile ^
       --include-data-dir=./templates=templates ^
       --include-data-dir=./static=static ^
       --plugin-enable=no-qt ^
       --plugin-enable=numpy ^
       --noinclude-default-mode=error ^
       --lto=yes ^
       --assume-yes-for-downloads ^
       --output-dir=dist ^
       --include-data-files=%ICON_FILE%=favicon.ico ^
       --windows-icon-from-ico=%ICON_FILE% ^
       --output-filename=%OUTPUT_NAME% ^
       "%SCRIPT_MAIN_NAME%"

endlocal
pause
```

## 贡献者
- SLSYSL(LANREN) - 开发者/主要负责人
- DusKal - 开发者/创始者
- monocolotion - 开发者
- MaymoN777(云影社区) - 提供支持

## 联系
- 用户交流反馈QQ群号：1046915992
- 主要负责人（LANREN）QQ号：2118254764
