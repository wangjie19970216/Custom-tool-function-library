function map(arr, callback) {
    // 声明一个空数组
    let result = [];
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        result.push(callback(arr[i], i));
    };
    // 返回结果
    return result;
}


// 封装reduce函数
function reduce(arr, callback, initValue) {
    // 声明变量
    let result = initValue;
    //执行回调
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        result = callback(result, arr[i]);
    }
    // 返回最终结果
    return result;
}

// 封装filter

/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
function filter(arr, callback) {
    // 声明空的数组
    let result = [];
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        let res = callback(arr[i], i);
        if (res) {
            result.push(arr[i]);
        }
    }
    // 返回结果
    return result;
}

// 封装find
/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
function find(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        let res = callback(arr[i], i);
        // 判断
        if (res) {
            // 返回符合条件的元素
            return arr[i];
        }
    };
    // 如果没有符合条件则返回undefined
    return undefined;
}

// 封装findIndex
/**
 * 
 * @param {Array} arr 
 * @param {Function} callback 
 */
function findIndex(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        let res = callback(arr[i], i);
        // 判断
        if (res) {
            // 返回符合条件的元素
            return i;
        }
    };
    // 如果没有符合条件则返回undefined
    return -1;
}

// every
function every(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        if (!callback(arr[i], i)) {
            return false;
        }
    }
    return true;
}
// some
function some(arr, callback) {
    // 遍历数组
    for (let i = 0; i < arr.length; i++) {
        // 执行回调
        if (callback(arr[i], i)) {
            return true;
        }
    }
    return false;
}

