
let nums = [1,2,3,4,5,6,7], 
 k = 3
var rotate = function(nums, k) {
    let newarr = nums.splice(-k)
    let newnums =   newarr.concat(nums)
    return newnums
};

console.log(nums.shift());
console.log(nums);
