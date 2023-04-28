var singleNumber = (nums)=>{
    let numbTrack = {};

    for (let i = 0; i < nums.length; i++) {
        if(nums[i] in numbTrack) numbTrack[nums[i]] = (tap[nums[i] || 0 ]) + 1;     

        else numbTrack[nums[i]]; 
    }
    return Object.keys(tap).find( key => tap[key] === 1);
}