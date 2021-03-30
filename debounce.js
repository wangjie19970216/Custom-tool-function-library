function debounce(callback, time) {
    // 定时器变量
    let timeId = null;
    // 返回一个函数
    return function (event) {
        // 判断
        if (timeId !== null) {
            // 清空定时器
            clearTimeout(timeId);
        }
        // 启动定时器
        timeId = setTimeout(() => {
            // 执行回调
            callback.call(this, event);
            //重置定时器变量
            timeId = null;
        }, time);
    }
}