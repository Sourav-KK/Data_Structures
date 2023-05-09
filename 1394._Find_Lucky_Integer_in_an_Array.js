var findLucky = function (arr) {
    let newMap = new Map()
    let maxKey = -1;

    for (let i = 0; i < arr.length; i++) {
        if (!newMap.has(arr[i])) newMap.set(arr[i], 1)
        else newMap.set(arr[i], newMap.get(arr[i]) + 1)
    }
    
    for (const [key, value] of newMap) {
        if (key === value && key > maxKey) maxKey = key
    }
    return maxKey;

};

// let arr = [2,2,3,4]
// let arr = [1,2,2,3,3,3]
let arr = [2, 2, 2, 3, 3]
console.log(findLucky(arr));