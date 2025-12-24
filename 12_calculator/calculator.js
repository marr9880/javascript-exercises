const add = function(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
};

const subtract = function(num1, num2) {
	return parseFloat(num1) - parseFloat(num2);
};

const sum = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
};

const power = function(num1, num2) {
	return parseFloat(num1) ** parseFloat(num2)
};

const factorial = function(n) {
	if (n < 0) {
    return "Factorial is not defined for negative numbers.";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
