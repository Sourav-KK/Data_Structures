// unique character in a string 

let str = "aabbcd"
var uniqueChar = (str)=>{
   for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    if (str.indexOf(char) === i && str.indexOf(char, i + 1) === -1) 
        return char;
    }
    return -1
}
console.log(uniqueChar(str));


// returns all unique characters in a string 

// let str = "aabbcd"
// var uniqueChar = (str)=>{
//    let mapp = {}
//    str.split('').forEach((elem)=>{
//        if (elem in mapp) mapp[elem].val +=1
//         else mapp[elem]={val: 1}           
//    })
//         return Object.keys(mapp).filter((elem)=> mapp[elem].val===1)
// }
// console.log(uniqueChar(str));