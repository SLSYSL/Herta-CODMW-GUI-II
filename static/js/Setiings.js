/* 下雪 */
let snowInterval;
let snowEnabled = localStorage.getItem('snowEnabled') !== 'false'; // 默认开启下雪

const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snow');
    const size = Math.random() * (5 - 1) + 5; // 随机大小
    snowflake.style.width = `${size}px`;
    snowflake.style.height = `${size}px`;
    snowflake.style.left = `${Math.random() * window.innerWidth}px`; // 随机位置
    document.body.appendChild(snowflake);
    
    const horizontalMovement = Math.random() * 500 - 100; // -100到100之间的随机值
    const fallDuration = Math.random() * (25 - 5) + 5; // 随机下降时间
    
    // 动画效果
    snowflake.style.animation = `fall ${fallDuration}s linear forwards`;
    snowflake.style.opacity = Math.random(); // 随机透明度

    // 用CSS变量来设置水平移动值
    snowflake.style.setProperty('--horizontal-movement', `${horizontalMovement}px`);

    // 移除雪花
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
};

// CSS动画
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        to {
            transform: translateY(${window.innerHeight + 10}px) translateX(var(--horizontal-movement));
        }
    }
`;
document.head.appendChild(style);

const stopSnow = () => {
    clearInterval(snowInterval);
    snowInterval = null;
    
    // 移除所有现有的雪花
    const snowflakes = document.querySelectorAll('.snow');
    snowflakes.forEach(snow => snow.remove());
};

// 监测网页可见性变化
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        if (snowInterval) {
            stopSnow()
        }
    } else if (snowEnabled) {
        createSnow();
    }
});

const createSnow = () => {
    if (snowInterval) {
        clearInterval(snowInterval);
    }
    
    if (snowEnabled) {
        snowInterval = setInterval(createSnowflake, 300);
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleSnow');
    if (toggleBtn) {
        // 设置按钮初始文本
        toggleBtn.innerHTML = snowEnabled ? '<i class="fas fa-snowflake me-1"></i>停止下雪效果' : '<i class="fas fa-snowflake me-1"></i>开启下雪效果';
        // 根据初始状态设置下雪效果
        if (snowEnabled) {
            createSnow();
        } else {
            stopSnow();
        }

        // 添加点击事件
        toggleBtn.addEventListener('click', function() {
            snowEnabled = !snowEnabled;
            localStorage.setItem('snowEnabled', snowEnabled);
            this.innerHTML = snowEnabled ? '<i class="fas fa-snowflake me-1"></i>停止下雪效果' : '<i class="fas fa-snowflake me-1"></i>开启下雪效果';
            
            if (snowEnabled) {
                createSnow();
            } else {
                stopSnow();
            }
        });
    }
});

// 初始化
if (snowEnabled) {
    createSnow();
} else {
    stopSnow();
}

/* 恢复默认设置 */
document.getElementById('clearCacheButton').addEventListener('click', function () {
    // 弹出确认对话框
    const confirmClear = confirm("您确定要清除缓存并重新打开网页吗？");

    if (confirmClear) {
        // 清除浏览器缓存
        if (window.localStorage) {
            localStorage.clear();  // 清除 localStorage
        }
        if (window.sessionStorage) {
            sessionStorage.clear();  // 清除 sessionStorage
        }
        // 重新加载页面
        window.location.reload(true);  // true 表示强制重新加载
    }
});