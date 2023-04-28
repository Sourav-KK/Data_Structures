    var removeDuplicates = function(nums) {
        let count = new Set(nums)
        nums.push(...count.values())
        let pointer =0
        for(let i = 1; i<nums.length; i++){
            if(nums[pointer] == nums[i]){
                nums[i] = '*';
            }
            pointer++;
        }
        // return count.size
        return nums =nums.sort()
    };
let nums = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(nums));