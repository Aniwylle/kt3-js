const prompt = require('prompt-sync')();

function reverseIndex(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    console.log(reversedArray);
    return reversedArray;
}

const inputArray = prompt("let array = "); 
const array = inputArray.split(" ").map(Number); 

reverseIndex(array);

module.exports = { reverseIndex };
