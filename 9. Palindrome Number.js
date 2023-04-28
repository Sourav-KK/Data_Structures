let x = -1

var isPalindrome = function(x) {
  if (x < 0) return false

  let rev = 0
  for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
  return rev === x
};
console.log(isPalindrome(x));

// var isPalindrome = function(x) {
//   if(x < 0){return false}
// let arr = Array.from(String(x), Number);
//   let pointer = arr.length-1
//   for(let i=0 ; i< arr.length; i++){
//       if( arr[i] == arr[pointer]){
//           pointer--
//       }else{
//           return false
//       }
//   }
//   return true
// };