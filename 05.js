const prompt = require('prompt-sync')();

function checkElem(array, callback) {
    for (let elem of array) {
        if (callback(elem)) {
            return true; 
        }
    }
    return false;
}

const inputArray = prompt("let array = "); 
const array = inputArray.split(" ").map(Number); 

let result = checkElem(array, (elem) => elem == 3);

console.log(result); 

module.exports = { checkElem };