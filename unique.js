function unique(arr) {
    // 声明一个空数组
    const result = [];
    // 遍历原始数组
    arr.forEach(item => {
        // 检测 result 数组中是否包含这个元素
        if (result.indexOf(item) === -1) {
            // 若没有该元素，则插入到result中
            result.push(item);
        }
    });
    // 返回 result
    return result;
}

function unique2(arr) {
    // 声明空数组
    const result = [];
    // 声明空对象
    const obj = [];
    // 遍历数组
    arr.forEach(item => {
        if (obj[item] === undefined) {
            obj[item] = true;
            result.push(item);
        }
    });
    return result;
}

function unique3(arr) {
    // // 将数组转化为集合Set
    // let set = new Set(arr);
    // // 将set 展开创建一个数组
    // let array = [...set];
    // return array;
    return [...new Set(arr)];
}