const sumAll = function(...numbers) {
    let lowestNumber = Math.min(...numbers);
    let highestNumber = Math.max(...numbers);

    let range = [];
    for (let i = lowestNumber; i <= highestNumber; i++) {
        range.push(i);
    }

    let sum = range.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    if (lowestNumber >= 0 && 
        highestNumber >=0 && 
        Number.isInteger(lowestNumber) &&
        Number.isInteger(highestNumber)) {
            return sum;
        } else {
            return "ERROR";
        }
};





// Do not edit below this line
module.exports = sumAll;
