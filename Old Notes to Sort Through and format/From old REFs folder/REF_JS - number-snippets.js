'use strict';

//Converting Strings to Numbers
console.log(Number('23'));
// A trick to converting a string to a number in javascript using type coercion
console.log(+'23');

//Parsing
// JS will parse the string in search for the number and transform it into a number
//The string needs to start with a Number
//Accepts a second argument which is the radix or based of the number. For Decimal systems we should always pass 10 to avoid bugs

// parseInt()
console.log(Number.parseInt('32px', 10));
console.log(Number.parseInt('e30', 10)); // Doesn't work

console.log(Number.parseInt(' 2.5rem ', 10));
// parseFloat()
console.log(Number.parseFloat('  2.5rem  ', 10));

//This also work but it's not encouraged in modern JavaScript
// console.log(.parseFloat('2.5rem  '));

console.log(`-------------`);
// isNaN()
// Doesn't work well to check if a value is a number
// Only realy use to check if a value is NaN
console.log(Number.isNaN(10));
console.log(Number.isNaN(10.0));
console.log(Number.isNaN(10.5));
console.log(Number.isNaN(+'20x'));
console.log(Number.isNaN('0'));
console.log(Number.isFinite(+'0'));
console.log(Number.isNaN('canis'));
console.log(Number.isNaN(20 / 0));

console.log(`-------------`);

//isFinite()
// Best way to check if a value is a number not a string
console.log(Number.isFinite(10));
console.log(Number.isFinite(10.0));
console.log(Number.isFinite(10.5));
console.log(Number.isFinite(+'20x'));
console.log(Number.isFinite('0'));
console.log(Number.isFinite(+'0'));
console.log(Number.isFinite('canis'));
console.log(Number.isFinite(20 / 0));

console.log(`-------------`);
// isInteger()
// Check if a Number is an Integer
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.0));
console.log(Number.isInteger(10.5));
console.log(Number.isInteger(+'20x'));
console.log(Number.isInteger('0'));
console.log(Number.isInteger(+'0'));
console.log(Number.isInteger('canis'));
console.log(Number.isInteger(20 / 0));

console.log(`-------------`);
//Math functions
// sqrt()
//Square root
console.log(Math.sqrt(25));

//Another wat of writing square root
console.log(25 ** (1 / 2));

//Cubic Root
console.log(8 ** (1 / 3));

// Math.max()
// Maximum Value
// It does type coercion but it doesn't do parsing
console.log(Math.max(1, 2, 33, 4, 221, 87, 45, 122, 221, 1, 1));
console.log(Math.max(1, 2, 33, 4, '221', 87, 45, 122, 221, 1, 1));
console.log(Math.max(1, 2, 33, 4, '221px', 87, 45, 122, 221, 1, 1));

//Math.min()
//Minimum Value
console.log(Math.min(1, 2, 33, 4, 221, 87, 45, 122, 221, 1, 1));

//Number Constants in JavaScript
//PI
console.log(Math.PI);
//Area of a Circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

// Math.random()
// Random numbers
// Number between zero and 1
console.log(Math.random());

console.log(`-------------`);
// Function to generate a random Integer
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomInt(0, 3));

console.log(`-------------`);

// Rounding Integers

// Math.trunc()
// Simply removes any decimal part
// Does Type Coercion
console.log(Math.trunc(23.4));

// Math.round()
// Rounds to the next integer
// Does Type Coercion
console.log(Math.round(23.4));
console.log(Math.round(23.7));

console.log(`-------------`);

// Math.ceil()
// Rounds Up
// Does Type Coercion
console.log(Math.ceil(23.4));
console.log(Math.ceil(23.7));

console.log(`-------------`);

// Math.floor()
// Rounds Down
// Does Type Coercion
console.log(Math.floor(23.4));
console.log(Math.floor(23.7));

console.log(`-------------`);

//Rounding Decimals
//Returns a String
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log((2.7872387).toFixed(2));
//Rounding Decimal and returning a number
console.log(+(2.7872387).toFixed(2));
