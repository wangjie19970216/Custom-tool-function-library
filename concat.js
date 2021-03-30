function concat(arr, ...args) {
    // 声明一个新数组
    const result = [...arr];
    // 遍历数组
    args.forEach(item => {
        // 判断item是否为数组
        if (Array.isArray(item)) {
            result.push(...item);
        } else {
            result.push(item);
        }
    })
    // 返回结果
    return result;
}

// slice
/**
 * 
 * @param {Array} arr 
 * @param {Number} begin 
 * @param {Number} end 
 * @returns 
 */
function slice(arr, begin, end) {
    // 若arr数组长度为0
    if (arr.length === 0) {
        return [];
    }
    // 判断begin
    begin = begin || 0;
    if (begin >= arr.length) {
        return [];
    }
    // 判断 end 
    end = end || arr.length;
    if (begin > end) {
        end = arr.length;
    }
    // 声明一个空数组
    const result = [];
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        if (i >= begin && i < end) {
            result.push(arr[i]);
        }
    }
    return result;
}
