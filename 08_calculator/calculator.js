const add = function(a, b) {
    let sum = a + b;
    return sum;
};

const subtract = function(a, b) {
    let result = a - b;
    return result;
};

const sum = function(array) {
    let finalSum = 0;
    for (let i = 0; i < array.length; i++) {
        finalSum += array[i];
    }

    return finalSum;
};

const multiply = function(array) {
    let product = array[0];
    for (let i = 1; i < array.length; i++) {
        product *= array[i];
    }

    return product;
};

const power = function(num, pow) {
    let product = num ** pow;
    return product;	
};

const factorial = function(factorial) {
    let product = 1;

    for (i = 0; i < factorial; i++) {
        product *= (factorial - i);
    }
    return product;
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
