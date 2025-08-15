const array = [1,2,3,4,5,6,7,8,9,0];

array.at()
array.concat()
array.copyWithin()
array.entries()
array.every()
array.fill()
array.filter()
array.find()
array.findIndex()
array.findLast()
array.findLastIndex()
array.flat()
array.flatMap()
array.forEach()
array.from()
array.fromAsync()
array.includes()
array.indexOf()
array.isArray()
array.join()
array.keys()
array.lastIndexOf()
array.map()
array.of()
array.pop()
array.push()
array.reduce()
array.reduceRight()
array.reverse()
array.shift()
array.slice()
array.some()
array.sort()
array.splice()
array.toLocaleString()
array.toReversed()
array.toSorted()
array.toSpliced()
array.toString()
array.unshift()
array.values()
array.with()


//////////////////////////////////////////////////////////////////////////////
// 
//////////////////////////////////////////////////////////////////////////////

/************
* Parameters
************/

/************
* Syntax
************/

/************
* Examples
************/



//////////////////////////////////////////////////////////////////////////////
// Simple Array
//////////////////////////////////////////////////////////////////////////////

////////////////////////
// isArray()
////////////////////////
// RETURNS boolean
array.isArray(value)


////////////////////////
// at()
////////////////////////
// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers.
// RETURNS the value at the defined array index

array.at(index)



////////////////////////
// Reverse
////////////////////////
// ALTERNATIVE toReversed() for creating a new array with the reversed result
// RETURNS the original array but reversed

const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);



////////////////////////
// CONCAT
////////////////////////
// The concat() method of Array instances is used to merge two or more arrays. 
// RETURNS a new concatenated array

const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);


////////////////////////
// JOIN
////////////////////////
// The join() method creates and returns a new string by concatenating all of the elements in this array,
// separated by commas or a specified separator string.
// If the array has only one item, then that item will be returned without using the separator.
// RETURNS a string
join()
join(separator)
console.log(letters.join(' - '));



//////////////////////////////////////////////////////////////////////////////
// SLICE
//////////////////////////////////////////////////////////////////////////////
// https://www.w3schools.com/jsref/jsref_slice_array.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// a new array object selected from start to end (end not included)
// where start and end represent the index of items in that array.
// The original array will not be modified.
// RETURNS a shallow copy of a portion of an array into

/************
* Parameters
************/
// start | Optional | Start position | Default is 0 | Negative numbers select from the end of the array.
// end | Optional | end position | Default is last element | Negative numbers select from the end of the array.
// RETURNS A new array containing the selected elements.

/************
* Syntax
************/
array.slice(start, end)

/************
* Examples
************/
let sliceArr = ['a', 'b', 'c', 'd', 'e'];
sliceArr.slice(2);
// Expected output ['c', 'd', 'e']
sliceArr.slice(2, 4);
// Expected output ['c', 'd']
sliceArr.slice(-2);
// Expected output ['d', 'e']
sliceArr.slice(-1);
// Expected output ['e']
sliceArr.slice(1, -2);
// Expected output ['b', 'c']



//////////////////////////////////////////////////////////////////////////////
// Splice
//////////////////////////////////////////////////////////////////////////////
// ALTERNATIVE toSpliced()
// https://www.w3schools.com/jsref/jsref_splice.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// The splice() method changes the contents of an array by removing or replacing
// existing elements and/or adding new elements in place.
// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced()

// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// RETURNS The original array array containing the removed items (if any).

/************
* Parameters
************/
// index	Required | The position to add/remove items. | Negative value defines the position from the end of the array.
// howmany	Optional | Number of items to be removed.
// item1, ..., itemX	Optional | New elements(s) to be added.

/************
* Syntax
************/
array.splice(index, howmany, item1, ....., itemX)

/************
* Examples
************/
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


//////////////////////////////////////////////////////////////////////////////
// The forEach Method
//////////////////////////////////////////////////////////////////////////////

// https://www.w3schools.com/jsref/jsref_foreach.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.
// RETURNS undefined

/************
* Parameters
************/
// Function()	Required | A function to run for each array element.
// currentValue	Required | The value of the current element.
// index	Optional | The index of the current element.
// arr	Optional | The array of the current element.
// thisValue	Optional | Default undefined | A value passed to the function as its this value.

/************
* Syntax
************/
array.forEach( function (currentValue, index, arr){
  // Code to be executed
}, thisValue)

/************
* Examples
************/

// Push items into a new array exempt oranges
const fruits = ['apple', 'orange', 'cherry', 'banana', 'cashew'];
let forEachResult = [];
fruits.forEach(function (fruit) {
  if (fruit !== 'orange') forEachResult.push(fruit);
});
console.log(forEachResult);
// expected result ['apple', 'cherry', 'banana', 'cashew']



//////////////////////////////////////////////////////////////////////////////
// The map Method
//////////////////////////////////////////////////////////////////////////////
// ALTERNATIVE flatMap()
// https://www.w3schools.com/jsref/jsref_map.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.
// RETURNS An array	| The results of a function for each array element.

/************
* Parameters
************/
// function()	Required | A function to be run for each array element.
// currentValue	Required | The value of the current element.
// index	Optional | The index of the current element.
// arr	Optional | The array of the current element.
// thisValue	Optional | Default value undefined | A value passed to the function to be used as its this value.

/************
* Syntax
************/
array.map( function (currentValue, index, arr) {
    //code to be executed
    return //
}, thisValue)


/************
* Examples
************/

// Multiply all the values in an array with 10:
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(function (number) {
  return number * 10;
});
console.log(newArr);
// Expected output:  [650, 440, 120, 40]

// Return a new array with the square root of all element values:
const numbers2 = [1, 4, 9];
const roots = numbers2.map((num) => Math.sqrt(num));
console.log(roots);
// Expected output:     [1, 2, 3]
// numbers is still [1, 4, 9]



//////////////////////////////////////////////////////////////////////////////
// The filter Method
//////////////////////////////////////////////////////////////////////////////

// https://www.w3schools.com/jsref/jsref_filter.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.
// RETURNS An array	| An array of elements that pass the test. | An empty array if no elements pass the test.

/************
* Parameters
************/
// function()	Required | A function to run for each array element.
// currentValue	Required | The value of the current element.
// index	Optional | The index of the current element.
// arr	Optional | The array of the current element.
// thisValue	Optional | Default undefined | A value passed to the function as its this value.

/************
* Syntax
************/
array.filter(function(currentValue, index, arr) {
  // Code to be executed
  return; //  It should return a truthy value to keep the element in the resulting array, and a falsy value otherwise.
}, thisValue)


/************
* Examples
************/
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function(word) {
   return word.length > 6
});

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


//////////////////////////////////////////////////////////////////////////////
// The reduce Method
//////////////////////////////////////////////////////////////////////////////
// https://www.w3schools.com/jsref/jsref_reduce.asp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.
// RETURNS The accumulated result from the last call of the callback function.

/************
* Parameters
************/
// total	Required | The initialValue, or the previously returned value of the function.
// currentValue	Required | The value of the current element.
// currentIndex	Optional | The index of the current element.
// arr	Optional | The array the current element belongs to.

/************
* Syntax
************/
array.reduce(function(total, currentValue, currentIndex, arr){
  if(condition){
  //code to be executed
  }
  else return total ; //value to be returned as The accumulated result from the last call of the callback function.
  // Always remember to return the accumulator value if your condition is not met otherwise the function doesn't work if any item in the array doesn't meet a condition
}, initialValue)


/************
* Examples
************/
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(function (accumulator, currentValue) {
   return accumulator + currentValue;
 }, initialValue);

console.log(sumWithInitial);
// Expected output: 10

// Maximum value
const maximumValue = array1.reduce((accumulator, currentValue) => {
  if (accumulator > currentValue) return accumulator;
  else return currentValue;
}, array1[0]);

console.log(maximumValue);
// Expected output: 4

//////////////////////////////////////////////////////////////////////////////
//Working with Node Lists
//////////////////////////////////////////////////////////////////////////////
// Converting a Node List into an array can be done using
Array.from(nodeList);
