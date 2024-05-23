const prompt = require('prompt-sync')() 
const inputNum = prompt(''); 
 
function devisionBySeven(num) { 
    if (num % 7 === 0) { 
        return true; 
    } else { 
        return false; 
    } 
} 
console.log(devisionBySeven(inputNum));

module.exports = { devisionBySeven };
