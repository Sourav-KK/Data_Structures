
// var plusOne = function(digits) {
//     digits = digits.reduce(function (accum, digit) {
//        return (accum * 10) + digit
//    }, 0);

//    digits = digits + 1

//    return digits = Array.from(String(digits), Number)
// };


// let digits = [1,2,3]


// console.log(plusOne(digits));


var plusOne = function (digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0
            if (i == 0) {
                digits.unshift(1)
            }
        } else {
            digits[i] = digits[i] + 1
            break
        }
    }
    return digits
};

let digits = [9]


console.log(plusOne(digits));

// https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript

// https://stackoverflow.com/questions/19182266/how-to-convert-an-integer-into-an-array-of-digits

// https://www.designcise.com/web/tutorial/how-to-convert-an-array-of-digits-to-an-integer-in-javascript    