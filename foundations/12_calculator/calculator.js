const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator*currentValue, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(num) {
	let i = 1;
  if (num == 1 || num == 0){
    // return i;
  } else {
    for (num; num > 1; num--){
      i = i*num;
    }
  }
  return i;
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
