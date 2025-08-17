Tags: #javascript #arrays #methods #reference #programming #iteration #manipulation

# JavaScript Array Methods

A comprehensive reference for JavaScript array methods with syntax, parameters, and practical examples.

## Overview

JavaScript arrays provide numerous built-in methods for manipulating and working with array data. These methods can be categorised into groups based on their functionality: accessing elements, modifying arrays, iteration methods, and utility methods.

## Array Method Categories

### Basic Array Methods

#### `Array.isArray()`
**Purpose:** Determines whether the passed value is an array.
**Returns:** Boolean

```javascript
Array.isArray([1, 2, 3]); // true
Array.isArray('hello'); // false
```

#### `at()`
**Purpose:** Takes an integer value and returns the item at that index, allowing for positive and negative integers.
**Returns:** The value at the defined array index

**Syntax:**
```javascript
array.at(index)
```

**Example:**
```javascript
const array = [1, 2, 3, 4, 5];
array.at(0);  // 1
array.at(-1); // 5 (last element)
```

### Array Manipulation Methods

#### `reverse()`
**Purpose:** Reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
**Returns:** The original array but reversed
**Alternative:** `toReversed()` for creating a new array with the reversed result

```javascript
const arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']
```

#### `concat()`
**Purpose:** Used to merge two or more arrays.
**Returns:** A new concatenated array

```javascript
const arr1 = ['a', 'b', 'c'];
const arr2 = ['d', 'e', 'f'];
const letters = arr1.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f']

// Alternative using spread operator
console.log([...arr1, ...arr2]);
```

#### `join()`
**Purpose:** Creates and returns a new string by concatenating all elements in the array, separated by commas or a specified separator string.
**Returns:** A string

**Syntax:**
```javascript
join()
join(separator)
```

**Example:**
```javascript
const letters = ['a', 'b', 'c'];
console.log(letters.join(' - ')); // "a - b - c"
```

### Array Slicing and Splicing

#### `slice()`
**Purpose:** Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified.
**Returns:** A new array containing the selected elements

**Parameters:**
- `start` (Optional): Start position. Default is 0. Negative numbers select from the end of the array.
- `end` (Optional): End position. Default is last element. Negative numbers select from the end of the array.

**Syntax:**
```javascript
array.slice(start, end)
```

**Examples:**
```javascript
let sliceArr = ['a', 'b', 'c', 'd', 'e'];
sliceArr.slice(2);      // ['c', 'd', 'e']
sliceArr.slice(2, 4);   // ['c', 'd']
sliceArr.slice(-2);     // ['d', 'e']
sliceArr.slice(-1);     // ['e']
sliceArr.slice(1, -2);  // ['b', 'c']
```

#### `splice()`
**Purpose:** Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
**Returns:** The original array containing the removed items (if any)
**Alternative:** `toSpliced()` for creating a new array without mutating the original

**Parameters:**
- `index` (Required): The position to add/remove items. Negative value defines the position from the end of the array.
- `deleteCount` (Optional): Number of items to be removed.
- `item1, ..., itemX` (Optional): New elements to be added.

**Syntax:**
```javascript
array.splice(index, deleteCount, item1, ..., itemX)
```

**Examples:**
```javascript
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // Inserts at index 1
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // Replaces 1 element at index 4
console.log(months); // ["Jan", "Feb", "March", "April", "May"]
```

### Iteration Methods

#### `forEach()`
**Purpose:** Calls a function for each element in an array. The method is not executed for empty elements.
**Returns:** `undefined`

**Parameters:**
- `callback` (Required): A function to run for each array element
  - `currentValue` (Required): The value of the current element
  - `index` (Optional): The index of the current element
  - `array` (Optional): The array of the current element
- `thisValue` (Optional): Default `undefined`. A value passed to the function as its `this` value

**Syntax:**
```javascript
array.forEach(function(currentValue, index, arr) {
  // Code to be executed
}, thisValue)
```

**Example:**
```javascript
// Push items into a new array except oranges
const fruits = ['apple', 'orange', 'cherry', 'banana', 'cashew'];
let forEachResult = [];
fruits.forEach(function(fruit) {
  if (fruit !== 'orange') forEachResult.push(fruit);
});
console.log(forEachResult); // ['apple', 'cherry', 'banana', 'cashew']
```

#### `map()`
**Purpose:** Creates a new array from calling a function for every array element. Does not execute the function for empty elements and does not change the original array.
**Returns:** An array with the results of a function for each array element
**Alternative:** `flatMap()` for flattening the result

**Parameters:**
- `callback` (Required): A function to be run for each array element
  - `currentValue` (Required): The value of the current element
  - `index` (Optional): The index of the current element
  - `array` (Optional): The array of the current element
- `thisValue` (Optional): Default value `undefined`. A value passed to the function to be used as its `this` value

**Syntax:**
```javascript
array.map(function(currentValue, index, arr) {
  // Code to be executed
  return // value
}, thisValue)
```

**Examples:**
```javascript
// Multiply all values in an array by 10
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(function(number) {
  return number * 10;
});
console.log(newArr); // [650, 440, 120, 40]

// Return a new array with the square root of all element values
const numbers2 = [1, 4, 9];
const roots = numbers2.map((num) => Math.sqrt(num));
console.log(roots); // [1, 2, 3]
```

#### `filter()`
**Purpose:** Creates a new array filled with elements that pass a test provided by a function. Does not execute the function for empty elements and does not change the original array.
**Returns:** An array of elements that pass the test, or an empty array if no elements pass the test

**Parameters:**
- `callback` (Required): A function to run for each array element
  - `currentValue` (Required): The value of the current element
  - `index` (Optional): The index of the current element
  - `array` (Optional): The array of the current element
- `thisValue` (Optional): Default `undefined`. A value passed to the function as its `this` value

**Syntax:**
```javascript
array.filter(function(currentValue, index, arr) {
  // Code to be executed
  return; // Should return a truthy value to keep the element
}, thisValue)
```

**Example:**
```javascript
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(function(word) {
  return word.length > 6;
});

console.log(result); // ["exuberant", "destruction", "present"]
```

#### `reduce()`
**Purpose:** Executes a reducer function for each array element and returns a single value: the function's accumulated result. Does not execute the function for empty array elements and does not change the original array.
**Returns:** The accumulated result from the last call of the callback function

**Parameters:**
- `callback` (Required): A function to execute for each element
  - `accumulator` (Required): The initialValue, or the previously returned value of the function
  - `currentValue` (Required): The value of the current element
  - `currentIndex` (Optional): The index of the current element
  - `array` (Optional): The array the current element belongs to
- `initialValue` (Optional): A value to use as the first argument to the first call of the callback

**Syntax:**
```javascript
array.reduce(function(accumulator, currentValue, currentIndex, arr) {
  if (condition) {
    // Code to be executed
  } else {
    return accumulator; // Always remember to return the accumulator value
  }
}, initialValue)
```

**Examples:**
```javascript
// Sum all values
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, initialValue);

console.log(sumWithInitial); // 10

// Find maximum value
const maximumValue = array1.reduce((accumulator, currentValue) => {
  if (accumulator > currentValue) return accumulator;
  else return currentValue;
}, array1[0]);

console.log(maximumValue); // 4
```

## Working with Node Lists

Converting a Node List into an array can be done using:

```javascript
Array.from(nodeList);
```

## Complete Array Methods Reference

For quick reference, here are all available array methods:

- `at()` - Access element by index (supports negative indices)
- `concat()` - Merge arrays
- `copyWithin()` - Copy elements within array
- `entries()` - Return iterator with key/value pairs
- `every()` - Test if all elements pass a test
- `fill()` - Fill elements with a static value
- `filter()` - Create new array with elements that pass a test
- `find()` - Return first element that passes a test
- `findIndex()` - Return index of first element that passes a test
- `findLast()` - Return last element that passes a test
- `findLastIndex()` - Return index of last element that passes a test
- `flat()` - Flatten array to specified depth
- `flatMap()` - Map then flatten by one level
- `forEach()` - Execute function for each element
- `from()` - Create array from array-like object
- `fromAsync()` - Create array from async iterable
- `includes()` - Check if array contains element
- `indexOf()` - Return first index of element
- `isArray()` - Check if value is an array
- `join()` - Join elements into string
- `keys()` - Return iterator with keys
- `lastIndexOf()` - Return last index of element
- `map()` - Create new array with results of calling function
- `of()` - Create array from arguments
- `pop()` - Remove and return last element
- `push()` - Add elements to end
- `reduce()` - Reduce array to single value (left to right)
- `reduceRight()` - Reduce array to single value (right to left)
- `reverse()` - Reverse array in place
- `shift()` - Remove and return first element
- `slice()` - Return shallow copy of portion
- `some()` - Test if at least one element passes a test
- `sort()` - Sort elements in place
- `splice()` - Add/remove elements at specific index
- `toLocaleString()` - Return localised string representation
- `toReversed()` - Return new reversed array
- `toSorted()` - Return new sorted array
- `toSpliced()` - Return new array with elements spliced
- `toString()` - Return string representation
- `unshift()` - Add elements to beginning
- `values()` - Return iterator with values
- `with()` - Return new array with element at index replaced