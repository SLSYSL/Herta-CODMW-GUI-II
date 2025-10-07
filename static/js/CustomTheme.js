// 自定义主题功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const primaryColorInput = document.getElementById('primaryColor');
    const accentColorInput = document.getElementById('accentColor');
    const backgroundColorInput = document.getElementById('backgroundColor');
    const textColorInput = document.getElementById('textColor');
    const applyCustomThemeBtn = document.getElementById('applyCustomTheme');
    const resetThemeBtn = document.getElementById('resetTheme');
    
    // 从localStorage恢复自定义主题设置
    function loadCustomTheme() {
        try {
            const savedPrimaryColor = localStorage.getItem('customPrimaryColor');
            const savedAccentColor = localStorage.getItem('customAccentColor');
            const savedBackgroundColor = localStorage.getItem('customBackgroundColor');
            const savedTextColor = localStorage.getItem('customTextColor');
            const isCustomThemeEnabled = localStorage.getItem('isCustomThemeEnabled') === 'true';
            
            if (savedPrimaryColor) primaryColorInput.value = savedPrimaryColor;
            if (savedAccentColor) accentColorInput.value = savedAccentColor;
            if (savedBackgroundColor) backgroundColorInput.value = savedBackgroundColor;
            if (savedTextColor) textColorInput.value = savedTextColor;
            
            if (isCustomThemeEnabled) {
                applyCustomTheme();
            }
        } catch (e) {
            console.error('读取自定义主题设置时出错:', e);
        }
    }
    
    // 应用自定义主题
    function applyCustomTheme() {
        const primaryColor = primaryColorInput.value;
        const accentColor = accentColorInput.value;
        const backgroundColor = backgroundColorInput.value;
        const textColor = textColorInput.value;
        
        // 更新CSS变量
        const root = document.documentElement;
        root.style.setProperty('--custom-primary-color', primaryColor);
        root.style.setProperty('--custom-accent-color', accentColor);
        root.style.setProperty('--custom-background-color', backgroundColor);
        root.style.setProperty('--custom-text-color', textColor);
        
        // 计算RGB值用于透明效果
        const primaryRgb = hexToRgb(primaryColor);
        const accentRgb = hexToRgb(accentColor);
        root.style.setProperty('--custom-primary-color-rgb', `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`);
        root.style.setProperty('--custom-accent-color-rgb', `${accentRgb.r}, ${accentRgb.g}, ${accentRgb.b}`);
        
        // 添加自定义主题类
        document.body.classList.add('custom-theme');
        
        // 保存到localStorage
        try {
            localStorage.setItem('customPrimaryColor', primaryColor);
            localStorage.setItem('customAccentColor', accentColor);
            localStorage.setItem('customBackgroundColor', backgroundColor);
            localStorage.setItem('customTextColor', textColor);
            localStorage.setItem('isCustomThemeEnabled', 'true');
        } catch (e) {
            console.error('保存自定义主题设置时出错:', e);
        }
    }
    
    // 重置为默认主题
    function resetTheme() {
        // 移除自定义主题类
        document.body.classList.remove('custom-theme');
        
        // 重置颜色选择器为默认值
        primaryColorInput.value = '#4361ee';
        accentColorInput.value = '#4cc9f0';
        backgroundColorInput.value = document.body.classList.contains('dark-mode') ? '#1e1e2e' : '#f8f9fa';
        textColorInput.value = document.body.classList.contains('dark-mode') ? '#ffffff' : '#212529';
        
        // 重置CSS变量
        const root = document.documentElement;
        root.style.setProperty('--custom-primary-color', '#4361ee');
        root.style.setProperty('--custom-accent-color', '#4cc9f0');
        root.style.setProperty('--custom-background-color', document.body.classList.contains('dark-mode') ? '#1e1e2e' : '#f8f9fa');
        root.style.setProperty('--custom-text-color', document.body.classList.contains('dark-mode') ? '#ffffff' : '#212529');
        
        // 移除localStorage中的自定义主题设置
        try {
            localStorage.removeItem('customPrimaryColor');
            localStorage.removeItem('customAccentColor');
            localStorage.removeItem('customBackgroundColor');
            localStorage.removeItem('customTextColor');
            localStorage.removeItem('isCustomThemeEnabled');
        } catch (e) {
            console.error('移除自定义主题设置时出错:', e);
        }
    }
    
    // 将十六进制颜色转换为RGB对象
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
    
    // 监听应用主题按钮
    applyCustomThemeBtn.addEventListener('click', function() {
        applyCustomTheme();
    });
    
    // 监听重置主题按钮
    resetThemeBtn.addEventListener('click', function() {
        resetTheme();
    });
    
    // 页面加载时恢复设置
    loadCustomTheme();
});