let nums = [1,2,3,1]
let k = 3

var containsNearbyDuplicate = (nums, k)=> {
    for(let i =0; i<nums.length; i++){
        for(let j =i+1; j<nums.length; j++){
            if(nums[i] == nums[j] && Math.abs(i-j)<=k ){
                return true
            }
        }
    }
};
    console.log(containsNearbyDuplicate(nums,k));