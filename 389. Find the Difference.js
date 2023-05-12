let s = "abcd", t = "abcde"

var findTheDifference = (s, t) => {
    let split = t.split('')

    s.split('').reduce((acc, curr) => {

        if (split.includes(curr)) split[split.indexOf(curr)] = -1

    }, 0)

    for (let i = 0; i < split.length; i++) 
        if (split[i] !== -1) return split[i]
    

};

// var findTheDifference = (s, t) => {
//     for (let letter of s)
//         t = t.replace(letter, '');
//     return t;

// };

console.log(findTheDifference(s, t));