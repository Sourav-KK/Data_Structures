var calPoints = (ops)=> {
    let record = []
    // const numberRegex = /^-?\d+$/;
    for (let i = 0; i < ops.length; i++) {
        // if ( numberRegex.test( ops[i] ) ) record.push( parseInt( ops[i], 10 ) )
        if(parseInt(ops[i])) record.push(parseInt(ops[i]))
         
        else if( ops[i] == '+' ) record.push( parseInt( record[ record.length-1 ], 10) + parseInt( record[ record.length-2 ], 10 ))
         
        else if( ops[i] == 'D' ) record.push( 2 * parseInt( record[ record.length-1 ], 10) )
         
        else if( ops[i] == 'C' ) record.pop()
                
    }    
    return record.reduce( ( acc, elem ) => { return acc + elem }, 0 )
};

// let ops = ["5","2","C","D","+"]
// let ops = ["5","-2","4","C","D","9","+","+"]
let ops = ["0","-2","D"]
 
console.log(calPoints(ops));