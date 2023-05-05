var findMaxConsecutiveOnes = function (nums) {
    let max = 0, count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++
            if (max < count) max = count
        } else max = count
    } return max
};
let nums = [1, 0, 1, 1, 0, 1]
console.log(findMaxConsecutiveOnes(nums))
