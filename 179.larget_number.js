var largestNumber = function (nums) {
    if (nums.every(num => num === 0)) return "0";

    nums.sort((a, b) => {
        const strA = a.toString();
        const strB = b.toString();
        return (strB + strA) - (strA + strB);
    });
    return nums.join('');
};
let nums = [10,2]
// let nums = [3,30,34,5,9]
// let nums = [0,0]
console.log(largestNumber(nums));

// Explanation:

// nums.every(..)
// this if statement checks if every element in nums array is 0,
// if true then the largest number which can be formed using 0's is 0 itself. therefore return string "0"

// const strA/B = a.toString();
// here we sort the nums, then converts each elements to string.

// return (strB + strA) - (strA + strB);

// Here we check the order in which two strings should appear.
// Suppose we have two numbers a = 3 and b = 30 and convert them to strings and concatenate them in two different orders: strA = "3", strB = "30",
// so (strB + strA) = "303" and (strA + strB) = "330".
// Then we subtract (strA + strB) from (strB + strA):
// (strB + strA) - (strA + strB) = "303" - "330" = -27. The negative result indicates that b should come before a in the sorted array.
// On the other hand, if a = 30 and b = 3, we get: (strB + strA) - (strA + strB) = "330" - "303" = 27; The positive result indicates that a should come before b in the sorted array.

