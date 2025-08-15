Tags: #javascript #promises #async #programming #reference #then #catch #finally

# JavaScript Promises Reference

## Overview

Promises are a way to handle asynchronous operations in JavaScript. A Promise represents a value that may be available now, in the future, or never. Promises have three states:

- **Pending**: Initial state, neither fulfilled nor rejected
- **Fulfilled**: Operation completed successfully
- **Rejected**: Operation failed

## Basic Promise Example

### Lottery Promise

```javascript
// Sample Promise
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening!');
  
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You Won!');
    } else {
      reject(new Error('You Lost, try again...'));
    }
  }, 1000);
});

lotteryPromise
  .then(res => console.log(res))
  .catch(err => console.error(err))
  .finally(() => console.log('Lottery draw ended'));
```

**Key concepts:**

- `resolve()`: Called when the operation succeeds
- `reject()`: Called when the operation fails
- `.then()`: Handles successful resolution
- `.catch()`: Handles rejection/errors
- `.finally()`: Runs regardless of outcome

## Promisifying Functions

### setTimeout Example

```javascript
// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2).then(() => console.log('I waited two seconds'));
```

This converts the callback-based `setTimeout` into a Promise-based function.

## Static Promise Methods

### Promise.resolve()

Creates a Promise that is immediately resolved with a given value:

```javascript
// Static Method for creating resolved promise
Promise.resolve('the resolved value of the promise')
  .then(value => console.log(value)); // Output: "the resolved value of the promise"
```

### Promise.reject()

Creates a Promise that is immediately rejected with a given reason:

```javascript
// Static Method for creating a rejected promise
Promise.reject('the rejected value of the promise')
  .catch(error => console.error(error)); // Output: "the rejected value of the promise"
```

## Complex Promise Example

### Function Returning a Promise

```javascript
// A function that returns a promise
const willGetDog = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      
      // The resolve() callback accepts an argument to be passed to the then() method
      if (rand > 0.5) {
        resolve({ status: 200, rand: rand });
      }
      
      // The reject() callback accepts an argument to be passed to the catch() method
      if (rand <= 0.5) {
        reject({ status: 400, rand: rand });
      }
    }, 1000);
  });
};

// Using the promise
willGetDog()
  .then(resolve => console.log(`Yay! You got a dog! resolve: ${resolve.rand}`))
  .catch(reject => {
    console.log(`Nay! No dog, sorry!`);
    console.log(reject);
  })
  .finally(() => {
    console.log(`It's just life`);
    console.log('******************');
  });
```

## Promise Chaining

Chaining promises with `.then()` allows you to execute functions sequentially. Each `.then()` can return a new promise to continue the chain:

```javascript
// Chaining promises
willGetDog()
  .then(resolve => {
    console.log(`Yay! You got a dog! resolve: ${resolve.rand}`);
    return willGetDog(); // Return another promise to continue the chain
  })
  .then(resolve => {
    console.log(`Yay! You got a dog! resolve: ${resolve.rand}`);
    return willGetDog();
  })
  .then(resolve => {
    console.log(`Yay! You got a dog! resolve: ${resolve.rand}`);
    return willGetDog();
  })
  .then(resolve => {
    console.log(`Yay! You got a dog! resolve: ${resolve.rand}`);
    return willGetDog();
  })
  .catch(reject => {
    console.log(`Nay! No dog, sorry!`);
    console.log(reject);
  });
```

**Important:** If any promise in the chain rejects, the control jumps directly to the nearest `.catch()` block.

## Promisifying Browser APIs

### Geolocation API Example

```javascript
// Promisifying the Geolocation API
const getPosition = function () {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition()
  .then(position => console.log(position))
  .catch(error => console.error(`Error code ${error.code}: ${error.message}`));
```

This converts the callback-based Geolocation API into a Promise-based function.

## Promise Methods Overview

### Instance Methods

- **`.then(onFulfilled, onRejected)`**: Handles fulfilled promises
- **`.catch(onRejected)`**: Handles rejected promises (sugar for `.then(null, onRejected)`)
- **`.finally(onFinally)`**: Runs regardless of promise outcome

### Static Methods

- **`Promise.resolve(value)`**: Returns a resolved promise with the given value
- **`Promise.reject(reason)`**: Returns a rejected promise with the given reason
- **`Promise.all(iterable)`**: Waits for all promises to resolve (fails fast if any reject)
- **`Promise.allSettled(iterable)`**: Waits for all promises to settle (resolve or reject)
- **`Promise.race(iterable)`**: Returns the first promise to settle

## Best Practices

1. **Always handle errors** with `.catch()` or try/catch with async/await
2. **Use `.finally()`** for cleanup operations that should run regardless of outcome
3. **Chain promises** instead of nesting them to avoid "callback hell"
4. **Return promises** from `.then()` blocks to continue chaining
5. **Consider async/await** for cleaner syntax in modern JavaScript

## Common Patterns

### Error Handling

```javascript
promise
  .then(result => {
    // Handle success
    return result;
  })
  .catch(error => {
    // Handle error
    console.error('Something went wrong:', error);
    throw error; // Re-throw if you want calling code to handle it
  })
  .finally(() => {
    // Cleanup
    console.log('Operation completed');
  });
```

### Conditional Chaining

```javascript
promise
  .then(result => {
    if (result.needsProcessing) {
      return processData(result);
    }
    return result;
  })
  .then(finalResult => {
    console.log('Final result:', finalResult);
  });
```

### Converting Callbacks to Promises

```javascript
// Original callback function
function callbackFunction(param, callback) {
  setTimeout(() => {
    if (param) {
      callback(null, 'Success');
    } else {
      callback(new Error('Failed'));
    }
  }, 1000);
}

// Promisified version
function promisifiedFunction(param) {
  return new Promise((resolve, reject) => {
    callbackFunction(param, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
}
```