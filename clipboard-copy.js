var clipboard = new ClipboardJS('.copyable', {
    text: function (trigger) {
        return trigger.textContent;
    }
});

// 复制成功时的提示
clipboard.on('success', function (e) {
    console.info('Copied:', e.text);
    // 创建一个提示元素
    var tooltip = document.createElement('div');
    tooltip.textContent = '已复制';
    tooltip.classList.add('tooltip');

    // 获取点击位置
    var x = e.trigger.getBoundingClientRect().left + window.scrollX + (e.trigger.offsetWidth / 2);
    var y = e.trigger.getBoundingClientRect().top + window.scrollY;

    // 设置提示元素的位置
    tooltip.style.left = x*1.755 + 'px';
    tooltip.style.top = y + 'px';

    // 将提示元素添加到文档中
    document.body.appendChild(tooltip);

    // 一段时间后移除提示元素
    setTimeout(function () {
        document.body.removeChild(tooltip);
    }, 1500); // 2秒后移除提示元素
});

// 复制失败时的提示
clipboard.on('error', function (e) {
    console.error('Error:', e.action);
    // 这里可以添加一些UI提示，比如一个弹出框或者一个提示消息
});
