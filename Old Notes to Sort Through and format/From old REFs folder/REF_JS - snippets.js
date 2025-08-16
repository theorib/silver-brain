// DOM MEthods
// To change CSS inline properties:
// containerApp.style.opacity = '1';
document.querySelector('.class').style.opacity = '0.5';

//Reset the html inside an element
document.querySelector('.class').innerHTML = '';

//Reset just the text inside an element
document.querySelector('.class').textContent = '';

//Clean input fields
document.querySelector('.class').value = '';

//Clear focus from input field
document.querySelector('.class').blur();

//Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

//Set Methods
console.log(ordersSet);
//shows how big a set is instead of using Length
console.log(ordersSet.size);
// Check if a set has an element
console.log(ordersSet.has('Pasta'));
console.log(ordersSet.has('Rice'));
// Add items
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
//Remove items
ordersSet.delete('Garlic Bread');
//Clear a set of all elements
// ordersSet.clear();

//Iterators
console.log(ordersSet.values());
//Same as Values
console.log(ordersSet.keys());

console.log(ordersSet.entries());
// ordersSet.forEach()

for (const order of ordersSet) {
  console.log(order);
}

//Use Case
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
//Using a set to create a unique values version of an array with the spread operator
const staffUnique = [...new Set(staff)];
//Using sets to get how many unique values are in an array
console.log(new Set(staff).size);
//Counting how many different characters there are in a string:
console.log(new Set('Theo Toledo Ribeiro Pereira').size);

// const staffUniqueArray = [...Set(staff)];
console.log(staffUnique);

// Maps
// Creating a new Map
const rest = new Map();
//Adding new elements to a map
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');
//Chaining adding new elements
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// Retriving elements from a map
rest.get('name');
// console.log(rest.get('name'));
// console.log(rest.get(true));

const time = 21;
//Using the bolean value as key example
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//Check if a map contains a certain key
rest.has('categories');
console.log(rest.has('categories'));

//Delete elements from the map
rest.delete(2);
console.log(rest);

//Size property
rest.size;
console.log(rest.size);

//All the values as a pseudo array
rest.values();
console.log(rest.values());

//Pass an array as a key
rest.set([1, 2], 'test');

//Using a DOM object as key
rest.set(document.querySelector('h1'), 'heading');

//Clear a map
// rest.clear();
console.log(rest);

// Another way of creating Maps without using the set() method

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct! 🎉'],
  [false, 'Try again.'],
]);
console.log(question);

//Creating a new Map from an object
// The structure that results from Object.entries() is exactly the same as the one above that we used to create a map from scratch.
const hoursMap = new Map(Object.entries(restaurant.openingHours));
console.log(hoursMap);

//Quizz App
//Retrieving an item needs the get() method
console.log(question.get('question'));

// Iteration
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Enter your answer number'));
const answer = 3;

console.log(question.get(answer === question.get('correct')));

// Convert a map back to an array of arrays
const questionArray = [...question];

// and there are also the following methods and normally ot use them you'd have to spread them into new arrays
console.log(question.entries());
console.log([...question.entries()]);
console.log(question.keys());
console.log([...question.keys()]);
console.log(question.values());
console.log([...question.values()]);

console.log();

//Array Methods

let arr5 = ['a', 'b', 'c', 'd', 'e'];

//Slice
//Slice method, returns a rew array that is a slice of the original array without altering the original
// In the slice method the end paramenter is not included in the output
// The length is always the end parameter minus the beginning parameter
console.log(arr5.slice(2));
console.log(arr5.slice(2, 4));
//With negative values it will start counting at the end
console.log(arr5.slice(-1));
//We can use the spread operator with slice -1 to get the last value of the array
console.log(...arr5.slice(-1));

//The following code starts at position one and stops before the last two elements
console.log(arr5.slice(1, -2));

// We can use the slice method to create a shallow copy of any array without giving it any arguments
console.log(arr.slice());
//Another way of getting a shallow copy but this time with the spread operator
console.log([...arr]);

//Splice
//The splice method works very similarly but it does actually change the original array
// A common use is to remove the last element of an array
// The second paramete in the splice method is actually a delete count so different from the slice method.
arr.splice(0, 3);

console.log(arr);

//Reverse
// The reverse method does actually mutate the original array
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr);
// console.log(arr.reverse());
console.log(arr2.reverse());

//Concat
// Used to concatenate two arrays
const letters = arr.concat(arr2);
console.log(letters);

//Join
//Results in a string with a defined separator
console.log(letters.join(' '));

//Push
// Pushes elements to the end of an array
letters.push('k', 'l', 'm');
console.log(letters);

//Unshift
//Adds elements to the begining of an array
letters.unshift(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(letters);

//indexOf
//returns the index of the first element that matches a value
console.log(letters.indexOf('a'));

//includes
//checks wether an array includes a value
//Returns true or false if a value is exacly the same as what you are checking
// With the includes method you can only test for equality, if you need more complex conditions look for the some() method
console.log(letters.includes('b'));
console.log(letters.includes('z'));

const arr3 = [23, 11, 64, 128];

//At Method
// shows you the value of an array at a specific position
console.log(arr3[0]);
console.log(arr3.at(0));

// To get the last element of an array,

//formerly we would do something like this:
console.log(arr[arr.length - 1]);
console.log(...arr.slice(-1));
console.log(arr.slice(-1)[0]);

//Now we can use the att method
console.log(arr.at(-1));

//For each is a higher order function which requires a callback function to tell it what to do
// The for each will run the function for each element of the array and we can specify an argument
// Doesn't return any values, it just runst the function once for each value in the array
movements.forEach(function (mov, i, arr) {
  // console.log(arr);
  if (mov < 0) {
    console.log(`Movement ${i + 1}:  You withdrew ${Math.abs(mov)}`);
  } else {
    console.log(`Movement ${i + 1}: You Deposited ${mov}`);
  }
});

// Map Method
// It maps the values of an array and returns a new array which has those values processed by a callback function
// Returns an array with mapped the original values mapped acording to the logic of the callback function
const movementsUSD = movements.map(function (value, index, array) {
  return value * eurToUsd;
});
// console.log(movements);
console.log(movementsUSD);

// Map method with an arrow function:
const movementsUSDarr = movements.map(mov => mov * eurToUsd);
// console.log(movements);
console.log(movementsUSDarr);

// Filter method
// Loops through an array filtering it's elements acording to the logic of the callback function
// Returns an array with the elements of the array filtered by the callback function
const deposits = movements.filter(function (mov) {
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

// Reduce Method
// The reduce method only returns one value, not an entire array. The callback function is used to calculate that value. It has an accumultor variable, a current value variable, an index variable and the full array variable
//The accumulator is like a snowball
// The reduce method also has another parameter which is the first value of the accumulator
// Returns one value, the result of the callback function

const balance = movements.reduce(function (accumulator, currentValue, i, arr) {
  // console.log(`accumulator: ${accumulator}`);
  // console.log(`currentValue: ${currentValue}`);
  // console.log(`i: ${i}`);
  // // console.log(arr);
  // console.log(`-----`);
  console.log(`Iteration: ${i} | Accumulator ${accumulator}`);
  return accumulator + currentValue;
}, 0);

//Reduce as an arrow function
const balance2 = movements.reduce((bal, mov) => bal + mov, 0);

//Find Method
//Also uses a callback function that receives a value, index and array
//The callback function needs to return a boolean, either true or false
//Returns the first value it finds the meet the criteria, otherwise it returns undefined
const found = movements.find(function (value, index, array) {
  return value >= 400;
  // console.log(value);
  // console.log(index);
  // console.log(array);
});
//Find method as an arrow function
const found1 = movements.find(mov => mov > 500);
console.log(found);
console.log(found1);

//Find Index Method
//The callback function needs to return a boolean, either true or falseit found as a result
//Returns the first index that meets the criteria, otherwise it returns undefined
const findI = movements.findIndex(function (value, index, array) {
  value === 3000;
});

const findIArrow = movements.findIndex(mov => mov === 3000);
console.log(findIArrow);

// Some Method : Condition
// The some method loops through the array
// the callback function needs to return a boolean value
// The some methods is very similar to the .includes() method. It loops through an array to checking for a condition but in this case, the some() method executes a callback function that can have a  complex set of conditions instead of just looking for equality which is what the includes() method does.
//The some method stops the loop through the array and returns true if any value in the arrary meets that condition
//Returns a boolean value
const anyDeposits = movements.some(function (value, index, arr) {
  // console.log(value);
  // console.log(index);
  // console.log(arr);
  return value > 0;
});

console.log(movements.some(mov => mov > 4000));

// Every Method : Condition
// The every method is similar to some but it only returns true if every value in the array tests positive to the callback function logic
// If any of the items on the array don't pass the logic it returns false
//Returns a boolean value
const everyDeposits = movements.every(function (value, index, arr) {
  // console.log(value);
  // console.log(index);
  // console.log(arr);
  return value > 0;
});
console.log(everyDeposits);
// Every method as an arrow function
console.log(movements.every(mov => mov > 4000));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
const arrDeep = [[1, 2, 3], [4, [5, [6]]], 7, [8, [9]]];

// Flat Method
// The flat method returns a flattened array with all subarrays flattened into one single array
// Takes an argument for depth, How deeply nested should the flattening recursively go to. Default is only one depth level
// Returns a flattened array by the level amount defined in the argument
console.log(arr.flat());
console.log(arrDeep.flat());
console.log(arrDeep.flat(3));

//Usage example, to get te overall bank balance for all accounts
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// FlatMap method
// Turns out that using the map function then the flat function is pretty common so there is a new method that combines both for better performance
// Returns a mapped array that is then flattened only 1 level deep

const overrallBalanceFlat = accounts.flatMap(function (value, index, arr) {
  return value.movements;
}, 1);
console.log(overrallBalanceFlat);
// FlatMap as an arrow function
console.log(accounts.flatMap(mov => mov.movements));

// Sort Method
// This method mutates the original array
// Sort method does its sorting based on strings. It converts everything to strings and then it does the sorting, so it will sort the first character first and thus, out of the box, doesn't work as expected with numbers
// Can take a callback function with two arguments
// Returns the mutated array

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const owners = ['Jonas', 'Zac', 'Adam', 'Martha'];
// console.log(owners.sort());

console.log(movements);
console.log(movements.sort());
// return < 0 A,B (keep order)
// return > 0 B,A (switch order)
movements.sort(function (a, b) {
  if (a > b) return 1; //This number doesn't matter as long as it's greater than zero}
  if (a < b) return -1; //This number doesn't matter as long as it's smaller than zero
});

//Ascending order
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a < b) return -1;
});
console.log(movements);
//Descending order
movements.sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
});
console.log(movements);

//Simplified sorting for numbers
//Ascending
movements.sort((a, b) => a - b);
console.log(movements);
// Descending
movements.sort((a, b) => b - a);
console.log(movements);

//Basic of creating an array
const arr = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 4, 5);

//Ways of creating arrays programatically
//Whenever we only pass one argument to the new Array() method, it creates a new array with that many empty slots
//However an array created like this can barelly be used, you can't use most methods with it apart from the fill() method which will fill the array with a specific value
const x = new Array(7); //This creates a new array with 7 empty elements
console.log(x);
x.fill(1);
console.log(x);

//Fill Method
//Fills an array with a value
//Takes similar parameters as the slice method, we can specifify a start and an end position
// fill('value',start number, end number)
// Modifies the original array
// Returns the modified original array

//Empty arrays with fill method
x.fill(0);
console.log(x);
x.fill(1, 3);
console.log(x);
x.fill(3, 3, 5);
console.log(x);
x.fill(5, -2);
console.log(x);

// Array.from() function
// This function was created to create arrays from "array like" data structures. Iterables like strings, arrays, maps and sets
// Takes a length parameter and a callback function that works very similarly to the map function. it has access to the current element and the current index and can perform any action on the iteration of that data
// Returns the new array

let z;
console.log(z);
z = Array.from({ length: 12 }, function (_, i) {
  // console.log(_);
  // console.log(i);
  return i + 1;
});
console.log(z);
z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//Another way of getting all the elements with a given HTML class is using the spread operator but you only get the node-like elements, you would still need to map them with some other function

const movementsUIspread = [...document.querySelectorAll('.movements__value')];
console.log(movementsUIspread);

//Creating Shallow copies of arrays
arr.slice();
//Another way of getting a shallow copy but this time with the spread operator
[...arr];
// Another way  for shallow copy with chaining
Array.from(arr);

//Dinamically getting dimensions of an html element
const navHeight = nav.getBoundingClientRect();
console.log(navHeight);

///////////////////////////////////////
// Reveal Sections as we scroll using the IntersectionObserver API

const revealSection = function (entries, observer) {
  //We can use destructuring like this because there will only ever be one entry for each time the callback function is called
  const [entry] = entries;

  //Guard Clause! to prevent coding from running unecessarily
  if (!entry.isIntersecting) return;
  // But in case the function hasn't return we execute the following code
  // We find out what html element triggeret the event entry
  const observedElement = entry.target;
  // here we manipulate that element
  observedElement.classList.remove('section--hidden');
  //and here we cease to observe the element since the observing has done it's job
  observer.unobserve(observedElement);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  //possible options here
  root: null,
  threshold: 0.18,
  // delay: 1000,
  // rootMargin: '-30%',
});

sections.forEach(function (section) {
  section.classList.add('section--hidden');
  // setting the sectionObserver in all the sections of the page
  sectionObserver.observe(section);
});

//DOM Lifecycle
//DOM Content Loaded
// The DOM Content Loaded event is fired after all the HTML has been downloaded and parsed into the DOM Tree. Also, this event is only fired after all scripts have been downloaded and executed.
//This event does not wait for images and other external resources to load, just HTML and javascript need to be loaded
//This is equivalent to the document.ready function in Jquery

document.addEventListener('DOMContentLoaded', function (e) {
  // console.log(`HTML parsed and DOM Tree built!`, e);
});

// Window Load
//The DOM Loaded event is fired not only after the HTML and JavaScript is loaded but also after all images and external resources like CSS are also loaded. It's fired by the Window object

window.addEventListener('load', function (e) {
  console.log(`Document Loaded`, e);
});

// Window before unload event

// window.addEventListener('beforeunload', function (e) {
//
//   e.preventDefault();
//   console.log(`before a user leaves a page`);
//   e.returnValue = '';
// });

//Best way to check if a number is valid
if (Number.isFinite(number))