function call(Fn, obj, ...args) {
    if (obj === undefined || obj === null) {
        obj = globalThis; //全局变量
    }
    // 为obj添加临时的方法
    obj.temp = Fn;
    // 调用 temp 方法
    let result = obj.temp(...args);
    // 删除temp方法
    delete obj.temp;
    // 返回执行结果
    return result;

}