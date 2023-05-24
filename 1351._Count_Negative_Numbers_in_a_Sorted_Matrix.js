// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.



var countNegatives = (grid)=> {
    return grid.flat().filter(elem=>elem<0).length
};

// var countNegatives = function(grid) {
//     let count = 0;
//     grid.forEach(elem=>{
//         elem.forEach(val=>{
//             if(val<0) count ++
//         })
//     })
//     return count
// };

let grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// let grid = [[3,2],[1,0]]
console.log(countNegatives(grid));