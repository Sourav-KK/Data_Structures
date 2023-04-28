// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

let nums = [0,1,0,3,12]

let moveZeroes = function(nums){
    for(let i =0; i<nums.length; i++){
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] == 0){
                [nums[i],nums[j] ] = [nums[j],nums[i] ] 
            }
        }
    }console.log(nums); 
}
moveZeroes(nums)


let move = (nums)=>{
    let pointer = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0){
            [nums[pointer], nums[i]] = [nums[i], nums[pointer]]
            pointer++
        } 
    }
    console.log(nums);      
}
move(nums)