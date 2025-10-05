let currentGameVersion = null;

/* 模态框 */
function showMessage(message, isSuccess) {
    const modal = new bootstrap.Modal(document.getElementById('messageArea'));
    const modalBody = document.querySelector('#messageArea .modal-body');
    const modalTitle = document.querySelector('#messageArea .modal-title');
    const modalHeader = document.querySelector('#messageArea .modal-header');

    // 清空并添加消息内容
    modalBody.innerHTML = '';
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    modalBody.appendChild(messageElement);

    // 根据成功状态修改样式和标题
    if (isSuccess) {
        modalHeader.className = 'modal-header bg-success text-white';
        modalTitle.innerHTML = '<i class="fas fa-check-circle me-2"></i>操作成功';
    } else {
        modalHeader.className = 'modal-header bg-danger text-white';
        modalTitle.innerHTML = '<i class="fas fa-exclamation-circle me-2"></i>发生错误';
    }

    // 显示模态框
    modal.show();
}
 
/* 黑塔终端后端设置 */
// 游戏启动时关闭 Stea
function setCloseSteam() {
    const CloseSteam = document.getElementById('CloseSteam').value.trim();

    fetch('/set_CloseSteam', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            CloseSteam: CloseSteam
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 配置文件设置失败: ' + error, false);
        });
}

function setAdmin() {
    const Admin_frontend = document.getElementById('Admin').value.trim();

    fetch('/set_Admin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Admin_frontend: Admin_frontend
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 配置文件设置失败: ' + error, false);
        });
}

function setGAMEPATH() {
    const gamePath = document.getElementById('GAME_PATH_INPUT').value.trim();

    // 简单的客户端验证
    if (!gamePath) {
        showMessage('请输入游戏路径', false);
        return;
    }

    fetch('/set_GAME_PATH', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            game_path: gamePath
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 路径设置失败: ' + error, false);
        });
};

function setHide_Console() {
    const Hide_Console = document.getElementById('Hide_Console').value.trim();

    fetch('/set_Hide_Console', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            Hide_Console: Hide_Console
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 配置文件设置失败: ' + error, false);
        });
}

function setPOST() {
    const flaskPost = document.getElementById('FLASK_POST').value;

    fetch('/set_POST', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            flaskPost: flaskPost
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 配置文件设置失败: ' + error, false);
        });
}

function setFlaskDebug() {
    const flaskDebug = document.getElementById('FLASK_DEBUG').value;

    fetch('/set_FLASK_DEBUG', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            flaskDebug: flaskDebug
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 配置文件设置失败: ' + error, false);
        });
}

function setFlaskMode() {
    const flaskMode = document.getElementById('FLASK_MODE').value;

    fetch('/set_FLASK_MODE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            flaskMode: flaskMode
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 配置文件设置失败: ' + error, false);
        });
}

function setDEBUG() {
    const DeBug = document.getElementById('DEBUG_MODE').value;

    fetch('/set_DEBUG_MODE', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            DeBug: DeBug
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 配置文件设置失败: ' + error, false);
        });
}

/* 黑塔终端主要功能 */
// 版本选择
// function setVersion() {
//     const version = document.getElementById('VerChoice').value;

//     fetch('/set_ver', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//             version: version,
//         })
//     })
//         .then(response => response.json())
//         .then(data => {
//             showMessage(data.message, data.status === 'success');
//         })
//         .catch(error => {
//             showMessage('错误 -版本设置失败: ' + error, false);
//         });
// }
function checkGameVersion() {
    fetch('/check_version', { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                currentGameVersion = data.version;
                showMessage(`成功 - 检测到游戏版本: ${data.version}`, true);
            } else {
                showMessage(data.message, false);
            }
        })
        .catch(error => {
            showMessage('错误 - 游戏版本检测失败: ' + error, false);
        });
}

// 启动游戏
function launchGame() {
    fetch('/launch_game', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 启动游戏失败: ' + error, false);
        });
}

// 设置迷彩
function setCamo() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const mode = document.getElementById('ModeChoice').value;
    const camoType = document.getElementById('CamoChoice').value;
    const bag = document.getElementById('BagChoice').value;
    const weapon = document.getElementById('PrimaryOrSecondary').value;

    fetch('/set_camo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            mode: mode,
            camo_type: camoType,
            bag: bag,
            weapon: weapon
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 迷彩设置失败: ' + error, false);
        });
}

// 设置全解
function setUnlock() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const unlockValue = document.getElementById('UnlockAll').value;

    fetch('/set_unlock', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            unlock_value: unlockValue
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 全解设置失败: ' + error, false);
        });
}

// 设置体积雾
function setVOG() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const vogValue = document.getElementById('VOGChoice').value;

    fetch('/set_vog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            vog_value: vogValue
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 体积雾设置失败: ' + error, false);
        });
}

// 设置隐藏武器
function setHideWeapons() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const hideValue = document.getElementById('HideWpChoice').value;

    fetch('/set_hide_weapons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            hide_value: hideValue
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 隐藏武器设置失败: ' + error, false);
        });
}

// 设置战区背包
function setWarzoneBag() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const wzValue = document.getElementById('WarBagChoice').value;

    fetch('/set_warzone_bag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            wz_value: wzValue
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 战区背包设置失败: ' + error, false);
        });
}

// 设置FOV
function setFOV() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const fovValue = document.getElementById('FOVSETTINGS').value;

    fetch('/set_fov', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            fov_value: fovValue
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - FOV设置失败: ' + error, false);
        });
}

// 设置夺金模式
function setGoldMode() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const goldValue = document.getElementById('GoldModeChoice').value;

    fetch('/set_gold_mode', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            gold_value: goldValue
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 夺金模式设置失败: ' + error, false);
        });
}

// 设置第三人称
function setThirdPerson() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const personValue = document.getElementById('ThirdPersonChoice').value;

    fetch('/set_third_person', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            person_value: personValue
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 第三人称设置失败: ' + error, false);
        });
}

// 设置隐藏地图
function setHideMap() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const mapValue = document.getElementById('HideMapChoice').value;

    fetch('/set_hide_map', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion,
            map_value: mapValue
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 隐藏地图设置失败: ' + error, false);
        });
}

// 启动BOT修改器
function startBot() {
    if (!currentGameVersion) {
        showMessage('错误 - 请先检测游戏版本', false);
        return;
    }

    const version = document.getElementById('Bot_VersionChoice').value;
    const friendly = document.getElementById('Friendly').value;
    const enemy = document.getElementById('Enemy').value;

    fetch('/set_bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: version,
            friendly: friendly,
            enemy: enemy,
            action: "start"
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
            document.getElementById(`botStatus${version.replace('.', '')}`).innerHTML =
                `<div class="alert alert-success">${data.message}</div>`;
        })
        .catch(error => {
            showMessage('错误 - 启动BOT修改器失败: ' + error, false);
        });
}

// 停止BOT修改器
function stopBot() {
    const version = document.getElementById('Bot_VersionChoice').value;

    fetch('/set_bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: version,
            action: "stop"
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
            document.getElementById(`botStatus${version.replace('.', '')}`).innerHTML =
                `<div class="alert alert-warning">${data.message}</div>`;
        })
        .catch(error => {
            showMessage('错误 - 停止BOT修改器失败: ' + error, false);
        });
}

// 解锁生存模式
function setCoop() {
    fetch('/set_coop', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            version: currentGameVersion
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 解锁生存模式失败: ' + error, false);
        });
}

// 设置游戏白名单
document.addEventListener('DOMContentLoaded', function () {
    // 获取下拉框和手动输入组
    const pathChoice = document.getElementById('WhitePathChoice');
    const manualPathGroup = document.getElementById('ManualPathGroup');

    // 监听下拉框变化
    pathChoice.addEventListener('change', function () {
        // 如果选中的是Manual，显示；否则隐藏
        if (this.value === 'Manual') {
            manualPathGroup.classList.remove('d-none', 'fade-out');
            manualPathGroup.classList.add('fade-in');
        } else {
            manualPathGroup.classList.remove('fade-in');
            manualPathGroup.classList.add('fade-out');
            setTimeout(() => {
                manualPathGroup.classList.add('d-none');
            }, 400);
        }
    });

    // 初始化：页面加载时根据当前选中的值设置一次
    if (pathChoice.value === 'Manual') {
        manualPathGroup.classList.remove('d-none', 'fade-out');
        manualPathGroup.classList.add('fade-in');
    } else {
        manualPathGroup.classList.remove('fade-in');
        manualPathGroup.classList.add('fade-out');
        setTimeout(() => {
            manualPathGroup.classList.add('d-none');
        }, 400);
    }
});

function set_white_list() {
    const way = document.getElementById('WhitePathChoice').value;
    const Manual_PATH = document.getElementById('Manual_PATH').value;

    fetch('/set_white_list', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            way: way,
            Manual_PATH: Manual_PATH
        })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 设置失败: ' + error, false);
        });
}

// 设置游戏名称
function setName() {
    const newName = document.getElementById('NAMESSETTINGS').value;
    if (!newName) {
        showMessage('错误 - 请输入新名称', false);
        return;
    }

    fetch('/set_name', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ new_name: newName })
    })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.status === 'success');
        })
        .catch(error => {
            showMessage('错误 - 名称设置失败: ' + error, false);
        });
}