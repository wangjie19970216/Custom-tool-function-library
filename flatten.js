/**
 * 
 * @param {Array} arr 
 */
function flatten1(arr) {
    // 定义一个空数组
    let result = [];
    // 遍历数组
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten1(item));
        } else {
            result = result.concat(item);
        }
    });
    return result;
}

function flatten2(arr) {
    // 声明数组
    let result = [...arr];
    // 循环判断
    while (result.some(item => Array.isArray(item))) {
        // [1, 2, [3, 4, [5, 6]], 7]
        // result = [].concat(...result);[1, 2, 3, 4, [5, 6], 7]
        // result = [].concat(...result);[1, 2, 3, 4, 5, 6, 7]
        result = [].concat(...result);
    }
    //返回结果
    return result;
}