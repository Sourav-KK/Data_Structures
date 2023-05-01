var missingNumber = function(nums) {
    // best approach
    let Sum = (nums.length*(nums.length+1))/2
    let actualSum = 0
    for (let i = 0; i < nums.length; i++) {
        actualSum = actualSum + nums[i]
    }
    return Sum - actualSum
    
    
    // time complexity n^2 

    // if (!nums.includes(0)) return 0 
    // for (let i = 0; i < nums.length; i++) {
    //     if (!nums.includes(i)) return i
    //     else continue           
    // }
};
let nums = [3,0,1];
console.log(missingNumber(nums));

// to find the missing number from an unsorted array of numbers in the range [0,n]

// solution: 
// find the sum of in the range [0,n]
// find the actual sum of the array
// subtract both values 