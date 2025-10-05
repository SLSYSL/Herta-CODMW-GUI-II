/* 恢复设置 */
document.addEventListener('DOMContentLoaded', function () {
    // 恢复主题设置
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.remove('light-mode', 'dark-mode');
        document.body.classList.add(savedTheme);

        // 更新主题切换按钮
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        if (savedTheme === 'dark-mode') {
            icon.className = 'fas fa-sun';
            themeToggle.innerHTML = '<i class="fas fa-sun"></i> 切换浅色模式';
        } else {
            icon.className = 'fas fa-moon';
            themeToggle.innerHTML = '<i class="fas fa-moon"></i> 切换深色模式';
        }
    } else {
        // 默认使用浅色模式
        document.body.classList.add('light-mode');
    }

    // 恢复页面设置
    const savedPage = localStorage.getItem('activePage');
    if (savedPage) {
        // 更新导航项
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === savedPage) {
                item.classList.add('active');
            }
        });

        // 显示对应内容区域
        const contentSections = document.querySelectorAll('.content-section');
        contentSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === savedPage) {
                section.classList.add('active');
            }
        });
    }
});

/* 主题切换 */
document.getElementById('themeToggle').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    // 添加切换动画效果
    this.classList.add('rotating');
    setTimeout(() => {
        this.classList.remove('rotating');
    }, 300);

    // 保存主题设置到本地存储
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentTheme);

    // 切换按钮图标和文本
    const icon = this.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.className = 'fas fa-sun';
        this.innerHTML = '<i class="fas fa-sun"></i> 切换浅色模式';
    } else {
        icon.className = 'fas fa-moon';
        this.innerHTML = '<i class="fas fa-moon"></i> 切换深色模式';
    }
});

/* 侧边导航栏 */
const navItems = document.querySelectorAll('.nav-item');
const contentSections = document.querySelectorAll('.content-section');
const dropdownItems = document.querySelectorAll('.dropdown-item');

// 主导航项点击事件
navItems.forEach(item => {
    item.addEventListener('click', function () {
        // 如果是下拉菜单项，不处理点击事件
        if (this.classList.contains('dropdown')) {
            return;
        }
        
        // // 添加点击反馈效果
        // this.style.transform = 'scale(0.95)';
        // setTimeout(() => {
        //     this.style.transform = '';
        // }, 50);
        
        // 更新活动导航项
        navItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        // 显示对应内容区域（带动画效果）
        const targetId = this.getAttribute('data-target');
        
        // 先隐藏所有内容区域
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // 延迟显示目标区域，确保动画效果
        requestAnimationFrame(() => {
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // 使用一个更短的延迟来确保流畅的过渡
                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 50);
            }
        });

        // 保存当前页面到本地存储
        localStorage.setItem('activePage', targetId);
    });
});

// 下拉菜单项点击事件
dropdownItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        
        // 更新活动导航项
        navItems.forEach(i => i.classList.remove('active'));
        // 设置父级下拉菜单为活动状态
        this.closest('.nav-item.dropdown').classList.add('active');

        // 显示对应内容区域（带动画效果）
        const targetId = this.getAttribute('data-target');
        
        // 先隐藏所有内容区域
        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        // 延迟显示目标区域，确保动画效果
        requestAnimationFrame(() => {
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // 使用一个更短的延迟来确保流畅的过渡
                setTimeout(() => {
                    targetSection.classList.add('active');
                }, 50);
            }
        });

        // 保存当前页面到本地存储
        localStorage.setItem('activePage', targetId);
    });
});