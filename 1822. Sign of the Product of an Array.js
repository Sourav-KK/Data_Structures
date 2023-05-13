// There is a function signFunc(x) that returns:
// 1 if x is positive, -1 if x is negativ,  0 if x is equal to 0.
// You are given an integer array nums. Let product be the product of all values in the array nums. Return signFunc(product).

let arraySign = (nums) => {
    
    let multi = nums.reduce((acc, curr) => {
        return acc * curr;
    })
    if(multi > 1) return 1
    if(multi < 0) return -1
    return 0
};

let nums = [-1,-2,-3,-4,3,2,1]
console.log(arraySign(nums));

// let arraySign = (nums) => {
//     let curr = 1;
//     for (let i = 0; i < nums.length; i++) curr *= nums[i]

//     if (curr < 0) return -1
//     else if (curr > 0) return 1
//     return 0
// };