// for loop n^2
// var containsDuplicate = function(nums) {
//     for(let i = 0; i<nums.length; i++){
//         for(let j= i+1; j< nums.length; j++){
//             if(nums[i]== nums[j] && i!=j) return true
//         }
//     }return false  
//   };

// Map()
// var containsDuplicate = (nums)=> {
//     let setmap = new Map();
//     for(let i = 0; i<nums.length; i++){
//         if (setmap.has(nums[i])) return true
//         else { setmap.set(nums[i])
//         };
//     }
//     return false
//   };

// Set()
var containsDuplicate = (nums)=> {
    let sett = new Set();
    for(let i = 0; i<nums.length; i++){
        if (sett.has(nums[i])) return true
        else { sett.add(nums[i])
        };
    }
    return false
  };


  let nums = [1,2,3,1];
  console.log(containsDuplicate(nums));