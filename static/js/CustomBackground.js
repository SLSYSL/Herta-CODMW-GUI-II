// 自定义背景图片和毛玻璃效果控制
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const backgroundImageInput = document.getElementById('backgroundImage');
    const removeBackgroundBtn = document.getElementById('removeBackground');
    const restoreDefaultBackgroundBtn = document.getElementById('restoreDefaultBackground');
    const blurAmountSlider = document.getElementById('blurAmount');
    const blurValueDisplay = document.getElementById('blurValue');
    const saturationAmountSlider = document.getElementById('saturationAmount');
    const saturationValueDisplay = document.getElementById('saturationValue');
    const brightnessAmountSlider = document.getElementById('brightnessAmount');
    const brightnessValueDisplay = document.getElementById('brightnessValue');
    const guiContent = document.querySelector('.GUI-content');
    const backgroundContainer = document.querySelector('.background-container');
    
    // 轮播相关元素
    const enableCarouselCheckbox = document.getElementById('enableCarousel');
    const carouselIntervalSlider = document.getElementById('carouselInterval');
    const intervalValueDisplay = document.getElementById('intervalValue');
    const carouselImagesInput = document.getElementById('carouselImages');
    const carouselImageList = document.getElementById('carouselImageList');
    const clearCarouselImagesBtn = document.getElementById('clearCarouselImages');
    
    // 默认背景图片路径
    const defaultBackground = "./static/img/Default.avif";
    
    // 轮播相关变量
    let carouselIntervalId = null;
    let carouselImages = ["./static/img/Default.avif","./static/img/1.avif","./static/img/2.avif","./static/img/3.avif","./static/img/4.avif","./static/img/5.avif","./static/img/6.avif"];
    let currentCarouselIndex = 0;
    
    // 从localStorage恢复设置
    let savedBackground = null;
    let hasRemovedBackground = false;
    try {
        savedBackground = localStorage.getItem('customBackground');
        hasRemovedBackground = localStorage.getItem('hasRemovedBackground') === 'true';
        
        // 恢复轮播设置
        const savedCarouselImages = localStorage.getItem('carouselImages');
        if (savedCarouselImages) {
            carouselImages = JSON.parse(savedCarouselImages);
        }
        
        const isCarouselEnabled = localStorage.getItem('carouselEnabled') === 'true';
        const savedCarouselInterval = localStorage.getItem('carouselInterval') || '10';
        
        // 设置轮播开关和间隔
        if (enableCarouselCheckbox) {
            enableCarouselCheckbox.checked = isCarouselEnabled;
        }
        
        if (carouselIntervalSlider) {
            carouselIntervalSlider.value = savedCarouselInterval;
            if (intervalValueDisplay) {
                intervalValueDisplay.textContent = savedCarouselInterval;
            }
        }
    } catch (e) {
        console.error('读取 localStorage 时出错:', e);
    }

    // 如果没有自定义背景且从未移除过背景，则使用默认背景
    if (!savedBackground && !hasRemovedBackground) {
        savedBackground = defaultBackground;
    }
    
    const savedBlurAmount = localStorage.getItem('blurAmount') || '3';
    const savedSaturationAmount = localStorage.getItem('saturationAmount') || '100';
    const savedBrightnessAmount = localStorage.getItem('brightnessAmount') || '100';
    const isModuleBlurEnabled = localStorage.getItem('moduleBlurEnabled') === 'true';
    const isSizeLimitDisabled = localStorage.getItem('sizeLimitDisabled') === 'true';
    const isBackgroundBlurEnabled = localStorage.getItem('backgroundBlurEnabled') === 'true';
    
    // 设置模糊程度
    document.documentElement.style.setProperty('--blur-amount', `${savedBlurAmount}px`);
    blurAmountSlider.value = savedBlurAmount;
    blurValueDisplay.textContent = savedBlurAmount;
    
    // 设置饱和度和亮度
    saturationAmountSlider.value = savedSaturationAmount;
    saturationValueDisplay.textContent = savedSaturationAmount;
    brightnessAmountSlider.value = savedBrightnessAmount;
    brightnessValueDisplay.textContent = savedBrightnessAmount;
    
    // 初始化背景设置
    function initBackground() {
        if (savedBackground && backgroundContainer) {
            backgroundContainer.style.backgroundImage = `url("${savedBackground}")`;
            
            // 根据设置决定是否对背景应用毛玻璃效果
            if (isBackgroundBlurEnabled) {
                guiContent.style.backdropFilter = `blur(var(--blur-amount))`;
                guiContent.style.webkitBackdropFilter = `blur(var(--blur-amount))`;
            } else {
                guiContent.style.backdropFilter = '';
                guiContent.style.webkitBackdropFilter = '';
            }
            
            // 应用滤镜效果
            updateBackgroundFilter();
        } else if (backgroundContainer) {
            // 如果没有保存的背景，则不设置任何背景（透明）
            backgroundContainer.style.backgroundImage = 'none';
        }
    }
    
    // 初始化轮播图片列表显示
    function initCarouselImageList() {
        if (!carouselImageList) return;
        
        if (carouselImages.length === 0) {
            carouselImageList.innerHTML = '<small class="text-muted">暂无轮播图片</small>';
            return;
        }
        
        carouselImageList.innerHTML = '';
        carouselImages.forEach((image, index) => {
            const imgElement = document.createElement('img');
            imgElement.src = image;
            imgElement.alt = `轮播图片 ${index + 1}`;
            imgElement.style.width = '50px';
            imgElement.style.height = '50px';
            imgElement.style.objectFit = 'cover';
            imgElement.style.borderRadius = '4px';
            imgElement.style.cursor = 'pointer';
            imgElement.style.transition = 'transform 0.2s ease';
            imgElement.addEventListener('click', function() {
                // 点击图片时切换到该图片
                if (backgroundContainer) {
                    // 添加过渡动画类
                    backgroundContainer.classList.add('carousel-transition');
                    
                    // 在动画结束后切换背景图片
                    setTimeout(() => {
                        backgroundContainer.style.backgroundImage = `url("${image}")`;
                        updateBackgroundFilter();
                        
                        // 动画结束后移除过渡类
                        setTimeout(() => {
                            backgroundContainer.classList.remove('carousel-transition');
                        }, 1000);
                    }, 500);
                }
            });
            
            // 添加悬停效果
            imgElement.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1)';
            });
            
            imgElement.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
            
            carouselImageList.appendChild(imgElement);
        });
    }
    
    // 启动轮播
    function startCarousel() {
        if (carouselIntervalId) {
            clearInterval(carouselIntervalId);
        }
        
        if (carouselImages.length === 0) return;
        
        const interval = parseInt(carouselIntervalSlider.value) * 1000;
        carouselIntervalId = setInterval(() => {
            if (backgroundContainer && carouselImages.length > 0) {
                // 添加过渡动画类
                backgroundContainer.classList.add('carousel-transition');
                
                // 在动画结束后切换背景图片
                setTimeout(() => {
                    currentCarouselIndex = (currentCarouselIndex + 1) % carouselImages.length;
                    backgroundContainer.style.backgroundImage = `url("${carouselImages[currentCarouselIndex]}")`;
                    updateBackgroundFilter();
                    
                    // 动画结束后移除过渡类
                    setTimeout(() => {
                        backgroundContainer.classList.remove('carousel-transition');
                    }, 1000);
                }, 500);
            }
        }, interval);
    }
    
    // 停止轮播
    function stopCarousel() {
        if (carouselIntervalId) {
            clearInterval(carouselIntervalId);
            carouselIntervalId = null;
        }
    }
    
    // 确保在DOM完全加载后再设置背景
    initBackground();
    initCarouselImageList();
    
    // 如果启用了轮播，则启动轮播
    if (enableCarouselCheckbox && enableCarouselCheckbox.checked) {
        startCarousel();
    }
    
    // 更新背景滤镜效果
    function updateBackgroundFilter() {
        const saturationValue = saturationAmountSlider.value;
        const brightnessValue = brightnessAmountSlider.value;
        
        if (backgroundContainer) {
            // 构建滤镜字符串（仅包含饱和度和亮度）
            const filterString = `saturate(${saturationValue}%) brightness(${brightnessValue}%)`;
            backgroundContainer.style.filter = filterString;
        }
    }
    
    // 监听背景图片上传
    backgroundImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // 检查文件大小，除非用户选择禁用限制
            // 每次都从localStorage获取最新设置
            const isSizeLimitDisabled = localStorage.getItem('sizeLimitDisabled') === 'true';
            if (!isSizeLimitDisabled && file.size > 2 * 1024 * 1024) {
                alert('图片文件太大，请选择小于2MB的图片，或在设置中启用"移除图片大小限制"选项。');
                return;
            }
            
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageData = event.target.result;
                
                // 添加过渡动画类
                if (backgroundContainer) {
                    backgroundContainer.classList.add('carousel-transition');
                    
                    // 在动画结束后切换背景图片
                    setTimeout(() => {
                        // 将背景设置在背景容器上
                        backgroundContainer.style.backgroundImage = `url("${imageData}")`;
                        
                        // 根据设置决定是否对背景应用毛玻璃效果
                        const isBackgroundBlurEnabled = localStorage.getItem('backgroundBlurEnabled') === 'true';
                        if (isBackgroundBlurEnabled) {
                            backgroundContainer.style.backdropFilter = `blur(var(--blur-amount))`;
                            backgroundContainer.style.webkitBackdropFilter = `blur(var(--blur-amount))`;
                        } else {
                            backgroundContainer.style.backdropFilter = '';
                            backgroundContainer.style.webkitBackdropFilter = '';
                        }
                        
                        // 应用滤镜效果
                        updateBackgroundFilter();
                        
                        // 动画结束后移除过渡类
                        setTimeout(() => {
                            backgroundContainer.classList.remove('carousel-transition');
                        }, 1000);
                    }, 500);
                }
                
                // 保存到localStorage
                try {
                    localStorage.setItem('customBackground', imageData);
                    // 清除已移除背景的标志
                    localStorage.removeItem('hasRemovedBackground');
                } catch (e) {
                    console.error('保存到localStorage时出错:', e);
                    if (e.name === 'QuotaExceededError') {
                        alert('保存背景图片失败，存储空间不足。请尝试使用更小的图片或清理浏览器存储空间。');
                    } else {
                        alert('保存背景图片失败，可能是存储空间不足。');
                    }
                }
            };
            reader.readAsDataURL(file);
        }
    });
    
    // 监听移除背景按钮
    removeBackgroundBtn.addEventListener('click', function() {
        // 添加过渡动画类
        if (backgroundContainer) {
            backgroundContainer.classList.add('carousel-transition');
            
            // 在动画结束后移除背景
            setTimeout(() => {
                // 移除背景容器背景
                backgroundContainer.style.backgroundImage = 'none';
                backgroundContainer.style.backdropFilter = '';
                backgroundContainer.style.webkitBackdropFilter = '';
                backgroundContainer.style.filter = '';
                
                // 动画结束后移除过渡类
                setTimeout(() => {
                    backgroundContainer.classList.remove('carousel-transition');
                }, 1000);
            }, 500);
        }
        
        try {
            localStorage.removeItem('customBackground');
            // 设置已移除背景的标志
            localStorage.setItem('hasRemovedBackground', 'true');
        } catch (e) {
            alert('从localStorage移除背景图片时出错:', e);
        }
        
        backgroundImageInput.value = '';
    });
    
    // 监听恢复默认背景按钮
    restoreDefaultBackgroundBtn.addEventListener('click', function() {
        // 添加过渡动画类
        if (backgroundContainer) {
            backgroundContainer.classList.add('carousel-transition');
            
            // 在动画结束后恢复默认背景
            setTimeout(() => {
                // 设置默认背景
                backgroundContainer.style.backgroundImage = `url("${defaultBackground}")`;
                
                // 根据设置决定是否对背景应用毛玻璃效果
                const isBackgroundBlurEnabled = localStorage.getItem('backgroundBlurEnabled') === 'true';
                if (isBackgroundBlurEnabled) {
                    backgroundContainer.style.backdropFilter = `blur(var(--blur-amount))`;
                    backgroundContainer.style.webkitBackdropFilter = `blur(var(--blur-amount))`;
                } else {
                    backgroundContainer.style.backdropFilter = '';
                    backgroundContainer.style.webkitBackdropFilter = '';
                }
                
                // 应用滤镜效果
                updateBackgroundFilter();
                
                // 动画结束后移除过渡类
                setTimeout(() => {
                    backgroundContainer.classList.remove('carousel-transition');
                }, 1000);
            }, 500);
        }
        
        try {
            // 保存默认背景到localStorage
            localStorage.setItem('customBackground', defaultBackground);
            // 清除已移除背景的标志
            localStorage.removeItem('hasRemovedBackground');
        } catch (e) {
            alert('保存默认背景到localStorage时出错:', e);
        }
        
        backgroundImageInput.value = '';
    });
    
    // 监听模糊程度调节
    blurAmountSlider.addEventListener('input', function() {
        const blurValue = this.value;
        document.documentElement.style.setProperty('--blur-amount', `${blurValue}px`);
        blurValueDisplay.textContent = blurValue;
        try {
            localStorage.setItem('blurAmount', blurValue);
        } catch (e) {
            alert('保存模糊程度设置时出错:', e);
        }
        
        // 更新背景的毛玻璃效果
        const isBackgroundBlurEnabled = localStorage.getItem('backgroundBlurEnabled') === 'true';
        if (backgroundContainer && savedBackground && isBackgroundBlurEnabled) {
            backgroundContainer.style.backdropFilter = `blur(${blurValue}px)`;
            backgroundContainer.style.webkitBackdropFilter = `blur(${blurValue}px)`;
        }
        
        // 更新背景滤镜
        updateBackgroundFilter();
    });
    
    // 监听饱和度调节
    saturationAmountSlider.addEventListener('input', function() {
        const saturationValue = this.value;
        saturationValueDisplay.textContent = saturationValue;
        try {
            localStorage.setItem('saturationAmount', saturationValue);
        } catch (e) {
            alert('保存饱和度设置时出错:', e);
        }
        
        // 更新背景滤镜
        updateBackgroundFilter();
    });
    
    // 监听亮度调节
    brightnessAmountSlider.addEventListener('input', function() {
        const brightnessValue = this.value;
        brightnessValueDisplay.textContent = brightnessValue;
        try {
            localStorage.setItem('brightnessAmount', brightnessValue);
        } catch (e) {
            console.error('保存亮度设置时出错:', e);
        }
        
        // 更新背景滤镜
        updateBackgroundFilter();
    });
    
    // 监听模块毛玻璃效果开关
    const moduleBlurCheckbox = document.getElementById('enableModuleBlur');
    if (moduleBlurCheckbox) {
        moduleBlurCheckbox.addEventListener('change', function() {
            try {
                localStorage.setItem('moduleBlurEnabled', this.checked);
            } catch (e) {
                console.error('保存模块毛玻璃效果开关设置时出错:', e);
            }
            updateModuleBlurEffect();
        });
    }
    
    // 监听背景毛玻璃效果开关
    const backgroundBlurCheckbox = document.getElementById('enableBackgroundBlur');
    if (backgroundBlurCheckbox) {
        backgroundBlurCheckbox.addEventListener('change', function() {
            try {
                localStorage.setItem('backgroundBlurEnabled', this.checked);
            } catch (e) {
                console.error('保存背景毛玻璃效果开关设置时出错:', e);
            }
            updateBackgroundBlurEffect();
        });
    }
    
    // 监听图片大小限制开关
    const disableSizeLimitCheckbox = document.getElementById('disableSizeLimit');
    if (disableSizeLimitCheckbox) {
        disableSizeLimitCheckbox.addEventListener('change', function() {
            try {
                localStorage.setItem('sizeLimitDisabled', this.checked);
            } catch (e) {
                console.error('保存图片大小限制设置时出错:', e);
            }
        });
    }
    
    // 监听轮播开关
    if (enableCarouselCheckbox) {
        enableCarouselCheckbox.addEventListener('change', function() {
            try {
                localStorage.setItem('carouselEnabled', this.checked);
            } catch (e) {
                console.error('保存轮播开关设置时出错:', e);
            }
            
            if (this.checked) {
                startCarousel();
            } else {
                stopCarousel();
            }
        });
    }
    
    // 监听轮播间隔调节
    if (carouselIntervalSlider) {
        carouselIntervalSlider.addEventListener('input', function() {
            const intervalValue = this.value;
            if (intervalValueDisplay) {
                intervalValueDisplay.textContent = intervalValue;
            }
            
            try {
                localStorage.setItem('carouselInterval', intervalValue);
            } catch (e) {
                console.error('保存轮播间隔设置时出错:', e);
            }
            
            // 如果轮播已启动，重新启动以应用新的间隔
            if (enableCarouselCheckbox && enableCarouselCheckbox.checked) {
                startCarousel();
            }
        });
    }
    
    // 监听轮播图片上传
    if (carouselImagesInput) {
        carouselImagesInput.addEventListener('change', function(e) {
            const files = e.target.files;
            if (files.length > 0) {
                let loadedCount = 0;
                const newImages = [];
                
                for (let i = 0; i < files.length; i++) {
                    const file = files[i];
                    
                    // 检查文件大小，除非用户选择禁用限制
                    const isSizeLimitDisabled = localStorage.getItem('sizeLimitDisabled') === 'true';
                    if (!isSizeLimitDisabled && file.size > 2 * 1024 * 1024) {
                        alert(`图片"${file.name}"太大，请选择小于2MB的图片，或在设置中启用"移除图片大小限制"选项。`);
                        continue;
                    }
                    
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        newImages.push(event.target.result);
                        loadedCount++;
                        
                        // 当所有图片都加载完成时
                        if (loadedCount === files.length) {
                            carouselImages = carouselImages.concat(newImages);
                            
                            // 保存到localStorage
                            try {
                                localStorage.setItem('carouselImages', JSON.stringify(carouselImages));
                            } catch (e) {
                                console.error('保存轮播图片到localStorage时出错:', e);
                                if (e.name === 'QuotaExceededError') {
                                    alert('保存轮播图片失败，存储空间不足。请尝试使用更小的图片或清理浏览器存储空间。');
                                } else {
                                    alert('保存轮播图片失败，可能是存储空间不足。');
                                }
                                return;
                            }
                            
                            // 更新图片列表显示
                            initCarouselImageList();
                            
                            // 如果启用了轮播，则重新启动轮播
                            if (enableCarouselCheckbox && enableCarouselCheckbox.checked) {
                                startCarousel();
                            }
                        }
                    };
                    reader.readAsDataURL(file);
                }
            }
        });
    }
    
    // 监听清空轮播图片按钮
    if (clearCarouselImagesBtn) {
        clearCarouselImagesBtn.addEventListener('click', function() {
            carouselImages = [];
            currentCarouselIndex = 0;
            
            // 清除localStorage中的轮播图片
            try {
                localStorage.removeItem('carouselImages');
            } catch (e) {
                console.error('从localStorage移除轮播图片时出错:', e);
            }
            
            // 更新图片列表显示
            initCarouselImageList();
            
            // 停止轮播
            stopCarousel();
            
            // 如果有自定义背景，恢复到自定义背景
            if (savedBackground && backgroundContainer) {
                // 添加过渡动画类
                backgroundContainer.classList.add('carousel-transition');
                
                // 在动画结束后恢复背景
                setTimeout(() => {
                    backgroundContainer.style.backgroundImage = `url("${savedBackground}")`;
                    updateBackgroundFilter();
                    
                    // 动画结束后移除过渡类
                    setTimeout(() => {
                        backgroundContainer.classList.remove('carousel-transition');
                    }, 1000);
                }, 500);
            }
        });
    }
    
    // 更新模块毛玻璃效果
    function updateModuleBlurEffect() {
        const cards = document.querySelectorAll('.card');
        const sidebar = document.querySelector('.sidebar');
        const dropdown = document.querySelectorAll('.dropdown-menu');
        const buttons = document.querySelectorAll('.GUI-btn');
        const inputs = document.querySelectorAll('input, select'); // 添加这行来定义inputs变量
        
        if (moduleBlurCheckbox && moduleBlurCheckbox.checked) {
            // 为所有模块元素添加毛玻璃效果
            cards.forEach(card => {
                card.style.backdropFilter = `blur(var(--blur-amount))`;
                card.style.webkitBackdropFilter = `blur(var(--blur-amount))`;
            });
            
            if (sidebar) {
                sidebar.style.backdropFilter = `blur(var(--blur-amount))`;
                sidebar.style.webkitBackdropFilter = `blur(var(--blur-amount))`;
            }
            
            dropdown.forEach(dropdown => {
                dropdown.style.backdropFilter = `blur(var(--blur-amount))`;
                dropdown.style.webkitBackdropFilter = `blur(var(--blur-amount))`;
            });
            
            buttons.forEach(button => {
                button.style.backdropFilter = `blur(var(--blur-amount))`;
                button.style.webkitBackdropFilter = `blur(var(--blur-amount))`;
            });
        } else {
            // 移除模块元素的毛玻璃效果，但保持过渡动画一致
            cards.forEach(card => {
                card.style.backdropFilter = 'none';
                card.style.webkitBackdropFilter = 'none';
            });
            
            if (sidebar) {
                sidebar.style.backdropFilter = 'none';
                sidebar.style.webkitBackdropFilter = 'none';
            }
            
            inputs.forEach(input => {
                input.style.backdropFilter = 'none';
                input.style.webkitBackdropFilter = 'none';
            });
            
            buttons.forEach(button => {
                button.style.backdropFilter = 'none';
                button.style.webkitBackdropFilter = 'none';
            });
        }
    }
    
    // 更新背景毛玻璃效果
    function updateBackgroundBlurEffect() {
        if (guiContent) {
            if (backgroundBlurCheckbox && backgroundBlurCheckbox.checked) {
                // 启用背景毛玻璃效果
                guiContent.style.backdropFilter = `blur(var(--blur-amount))`;
                guiContent.style.webkitBackdropFilter = `blur(var(--blur-amount))`;
            } else {
                // 禁用背景毛玻璃效果
                guiContent.style.backdropFilter = 'none';
                guiContent.style.webkitBackdropFilter = 'none';
            }
        }
    }
    
    // 初始化模块毛玻璃效果
    if (moduleBlurCheckbox) {
        moduleBlurCheckbox.checked = isModuleBlurEnabled;
        updateModuleBlurEffect();
    }
    
    // 初始化背景毛玻璃效果（默认关闭）
    if (backgroundBlurCheckbox) {
        backgroundBlurCheckbox.checked = isBackgroundBlurEnabled;
        updateBackgroundBlurEffect();
    }
    
    // 设置图片大小限制开关
    if (disableSizeLimitCheckbox) {
        disableSizeLimitCheckbox.checked = isSizeLimitDisabled;
    }
});