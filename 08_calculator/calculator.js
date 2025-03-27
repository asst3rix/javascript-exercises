const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  /* let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum; */

  return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function (arr) {
  /* let mult = 1;
  for (let i = 0; i < arr.length; i++) {
    mult *= arr[i];
  }
  return mult; */

  return arr.reduce((mult, item) => mult * item, 1);
};

const power = function (a, b) {
  let pow = a;
  for (let i = 1; i < b; i++) {
    pow *= a;
  }
  return pow;
};

const factorial = function (a) {
  let fact = 1;
  for (let i = a; i > 0; i--) {
    fact *= i;
  }
  return fact;
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
