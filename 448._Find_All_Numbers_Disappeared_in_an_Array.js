var findDisappearedNumbers = function (nums) {
    let missing = []
    nums.forEach(element => {
        let index = Math.abs(element) - 1
        if (nums[index] > 0) nums[index] = nums[index] * (-1)
    });
    for (let i = 0; i < nums.length; i++) if (nums[i] > 0) missing.push(i + 1)
    return missing
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1]
console.log(findDisappearedNumbers(nums));


        // Loop through each number in nums 

        // Choose an index in nums based on the value we're currently looking at.
        // We have to use Math.abs on it first, in case we've already visited this index and made it negative.
        // Then, since arrays are 0 indexed, subtract 1 from it

        // Then multiply the input array by -1 
        // We don't want to do this if we've already done so, which is why we check that it's greater than 0.

        // Loop through it again.

    // Check if the number at this position is positive or negative.
        // It doesn't matter what the number is necessarily, we just want to use the index of this value to check what we visited.
        // And again, since arrays are 0-indexed, we'll be off by one, so add 1 when we push to results.
        // 448._Find_All_Numbers_Disappeared_in_an_Array