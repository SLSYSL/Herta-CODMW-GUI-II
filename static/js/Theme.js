// 页面加载时恢复主题和页面设置
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

// 主题切换功能
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