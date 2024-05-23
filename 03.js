const prompt = require('prompt-sync')() 

function sumElems(array) {
    let sum = 0;
    for (let element of array) {
        if (!isNaN(parseFloat(element))) { // Проверяем, является ли элемент числом
            let num = parseFloat(element);
            sum += num;
        }
    }
    return sum;
}


const inputArray = prompt("let array = "); 
const array = inputArray.split(" ").map(Number); 

let result = sumElems(array);
console.log(result);

module.exports = { sumElems };
