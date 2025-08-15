Tags: #javascript #loops #programming #reference #for #while #iteration

# JavaScript Loops Reference

## Overview

JavaScript provides several types of loops to iterate through code blocks:

- **for** - loops through a block of code a number of times
- **for/in** - loops through the properties of an object
- **for/of** - loops through the values of an iterable object
- **while** - loops through a block of code while a specified condition is true
- **do/while** - loops through a block of code while a specified condition is true, but executes at least once

## For Loop

The for statement creates a loop with 3 optional expressions:

### Syntax

```javascript
for (expression1; expression2; expression3) {
  // code block to be executed
}
```

- **expression1**: Executed once before the loop starts (initialization)
- **expression2**: Condition evaluated before each iteration
- **expression3**: Executed after each iteration (increment/decrement)

### Example

```javascript
let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
```

## For...In Loop

The for...in statement loops through the properties of an object:

### Syntax

```javascript
for (key in object) {
  // code block to be executed
}
```

### Example

```javascript
const person = {fname: "John", lname: "Doe", age: 25};
let text = "";

for (let x in person) {
  text += person[x] + " ";
}
// Output: "John Doe 25 "
```

## For...Of Loop

The for...of statement loops through the values of an iterable object (arrays, strings, maps, sets, etc.):

### Syntax

```javascript
for (variable of iterable) {
  // code block to be executed
}
```

### Example

```javascript
const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
  text += x + " ";
}
// Output: "BMW Volvo Mini "
```

## While Loop

The while loop executes a block of code as long as a specified condition is true:

### Syntax

```javascript
while (condition) {
  // code block to be executed
}
```

### Example

```javascript
let text = "";
let i = 0;

while (i < 10) {
  text += "The number is " + i + "<br>";
  i++;
}
```

**Important:** Remember to increment the variable used in the condition, otherwise the loop will never end!

## Do...While Loop

The do...while loop is a variant of the while loop. This loop will execute the code block once before checking if the condition is true, then it will repeat the loop as long as the condition is true:

### Syntax

```javascript
do {
  // code block to be executed
}
while (condition);
```

### Example

```javascript
let text = "";
let i = 0;

do {
  text += "The number is " + i + "<br>";
  i++;
}
while (i < 10);
```

**Key difference:** The do...while loop will always execute at least once, even if the condition is false from the start.

## Loop Control Statements

### Break Statement

Exits the loop immediately:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}
// Output: 0, 1, 2
```

### Continue Statement

Skips the current iteration and continues with the next:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// Output: 0, 1, 2, 4, 5, 6, 7, 8, 9
```

## Best Practices

1. **Use for...of for arrays** when you need the values
2. **Use for...in for objects** when you need the keys/properties
3. **Use regular for loop** when you need index control
4. **Always ensure loop conditions will eventually become false** to avoid infinite loops
5. **Consider using array methods** like `forEach()`, `map()`, `filter()` for functional programming approaches

## Common Use Cases

### Iterating through Arrays

```javascript
const numbers = [1, 2, 3, 4, 5];

// Using for...of (recommended for values)
for (const num of numbers) {
  console.log(num);
}

// Using traditional for loop (when you need index)
for (let i = 0; i < numbers.length; i++) {
  console.log(`Index ${i}: ${numbers[i]}`);
}
```

### Iterating through Objects

```javascript
const user = {
  name: "Alice",
  age: 30,
  city: "New York"
};

// Using for...in
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
```

### Creating Nested Loops

```javascript
// Creating a multiplication table
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
```