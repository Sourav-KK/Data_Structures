console.log(commonFactors(25,30));

function  commonFactors(a, b) {
    let count = 0
    let i = 0
    while(i <= Math.min(a,b)){
        if (a%i ==0 && b%i ==0) count++
        i++;
    }
    return count;
};

// var commonFactors = function(a, b) {
//     let count = 0
// for( let i = 1; i <= b; i++){
//     if( a%i==0 && b%i==0 ){
//       count ++
//     }
//   }
//     return count;
// };