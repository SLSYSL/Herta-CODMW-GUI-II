// 获取当前活动的APlayer实例
function getCurrentPlayer() {
    return ap;
    // const activeTab = document.querySelector('.content-section.active');
    // if (!activeTab) return ap;

    // // 检查是否是自定义列表的播放器
    // if (activeTab.id === 'CUSTOM' && window.customListManager) {
    //     const customPlayer = window.customListManager.getCurrentPlayer();
    //     if (customPlayer) {
    //         return customPlayer;
    //     }
    // }

    // // 检查其他播放器
    // switch (activeTab.id) {
    //     // case 'emo_id':
    //     //     return emo;
    //     // case 'nfunk_id':
    //     //     return nfunk;
    //     // case 'emo_y_id':
    //     //     return emo_y;
    //     default:
    //         return ap;
    // }
}

// 下载音乐处理函数
document.getElementById('downloadMusic').addEventListener('click', async function () {
    const player = getCurrentPlayer();
    if (!player) {
        alert('未找到播放器！');
        return;
    }

    const audio = player.audio;
    const currentMusic = player.list.audios[player.list.index];

    if (!audio.src) {
        alert('请先播放音乐！');
        return;
    }

    try {
        const link = document.createElement('a');
        link.href = audio.src;
        link.download = currentMusic.name + '.mp3';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('下载音乐失败:', error);
        alert('下载失败，请稍后重试');
    }
});

// 下载歌词处理函数
document.getElementById('downloadLyric').addEventListener('click', async function () {
    const player = getCurrentPlayer();
    if (!player) {
        alert('未找到播放器！');
        return;
    }

    const currentMusic = player.list.audios[player.list.index];
    let lrc = currentMusic.lrc;

    // 处理特殊情况
    if (!lrc && player.lrc && player.lrc.content) {
        lrc = player.lrc.content;
    }

    if (!lrc || lrc === notlrc || lrc.includes('暂无歌词')) {
        alert('当前歌曲没有歌词！');
        return;
    }

    try {
        const blob = new Blob([lrc], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = currentMusic.name + '.lrc';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
    } catch (error) {
        console.error('下载歌词失败:', error);
        alert('下载失败，请稍后重试');
    }
});

// 添加跳转处理函数
document.getElementById('jumpToHighlight').addEventListener('click', function () {
    const player = getCurrentPlayer();
    const currentMusic = player.list.audios[player.list.index];

    if (!currentMusic.highlight) {
        alert('当前歌曲未设置高潮时间点！');
        return;
    }

    // 跳转到高潮时间点
    player.seek(currentMusic.highlight);

    // 如果当前是暂停状态,自动开始播放
    if (player.paused) {
        player.play();
    }
});

// 下载封面处理函数
document.getElementById('downloadCover').addEventListener('click', async function () {
    const player = getCurrentPlayer();
    if (!player) {
        alert('未找到播放器！');
        return;
    }

    const currentMusic = player.list.audios[player.list.index];
    if (!currentMusic.pic) {
        alert('当前歌曲没有封面图片！');
        return;
    }

    try {
        const link = document.createElement('a');
        link.href = currentMusic.pic;
        link.download = currentMusic.name + '.jpg';
        link.target = '_blank';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        console.error('下载封面失败:', error);
        alert('下载失败，请稍后重试');
    }
});

// 添加跳转处理函数
document.getElementById('jumpToHighlight').addEventListener('click', function () {
    const player = getCurrentPlayer();
    const currentMusic = player.list.audios[player.list.index];

    if (!currentMusic.highlight) {
        alert('当前歌曲未设置高潮时间点！');
        return;
    }

    // 跳转到高潮时间点
    player.seek(currentMusic.highlight);

    // 如果当前是暂停状态,自动开始播放
    if (player.paused) {
        player.play();
    }
});