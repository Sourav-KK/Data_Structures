var isHappy = function(n) {
    const seenNumbers = new Set();
    while (!seenNumbers.has(n)) {
        seenNumbers.add(n);
        const digits = n.toString().split('');
        n = digits.reduce((sum, digit) => sum + digit * digit, 0);
        if (n === 1) return true;
    }
    return false;
    
    // for beginners
    // let sat = new Set()
    // while(!sat.has(n)) {
    //     sat.add(n)
    //     n = n.toString().split('')
    //     let sum = 0
    //     for (let i = 0; i < n.length; i++) sum += n[i] * n[i]
    //     n = sum
    // }
    // return n === 1
};

let n = 19
console.log(isHappy(n));
