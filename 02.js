const prompt = require('prompt-sync')() 
 
function changeElem(array, n) { 
    const newArray = array.map(element => element * n); 
    return newArray; 
} 
 
const inputArray = prompt("let array = "); 
const array = inputArray.split(" ").map(Number); 
const multiplier = prompt(""); 
const resultArray = changeElem(array, multiplier); 
 
console.log(resultArray);

module.exports = { changeElem };