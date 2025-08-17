Tags: #javascript #async #promises #await #fetch #api #error-handling #parallel #sequential #programming

# JavaScript Async Functions

A comprehensive guide to asynchronous functions in JavaScript, covering async/await syntax, error handling, and parallel vs sequential execution patterns.

## Overview

Async functions are a powerful feature in JavaScript that provide a cleaner way to work with asynchronous operations. They always return a Promise and allow the use of the `await` keyword to pause execution until a Promise is resolved.

## Key Concepts

### Async Function Behaviour

- **Always return a Promise**: Async functions automatically return a Promise, even without explicitly writing `return Promise`
- **Promise consumption**: The returned Promise can be consumed using `.then()` and `.catch()`
- **Rejection mechanism**: To reject a Promise, use the `throw` keyword with any value (Error object, string, etc.)
- **Execution pausing**: The `await` keyword pauses function execution until the awaited Promise is settled

## Basic Async Function Structure

### With Internal Error Handling

```javascript
const getData = async function () {
  try {
    // Store the fetch request in a variable
    const request = await fetch('https://swapi.dev/api/people/');
    
    // If the request was unsuccessful throw a new error
    if (!request.ok) {
      throw new Error(`HTTP Error: ${request.status} - ${request.statusText}`);
    }
    
    // Store the returned data in a new variable
    const data = await request.json();

    console.log(`Results from async function:`);
    if (data) {
      for (let people of data.results) {
        console.log(`${people['name']}`);
      }
    }
  } catch (error) {
    // Handle errors
    console.error('Error:', error.message);

    // Important: rethrow the error so it can be caught outside the async function
    throw error;
  }
};

getData();
```

### With External Error Handling

```javascript
const getMoreData = async function () {
  // Store the fetch request in a variable
  const request = await fetch('https://swapi.dev/api/planets/');
  
  // If the request was unsuccessful throw a new error
  if (!request.ok) {
    throw new Error(`HTTP Error: ${request.status} - ${request.statusText}`);
  }
  
  // Store the returned data in a new variable
  const data = await request.json();

  console.log(`Results from async function:`);
  if (data) {
    for (let people of data.results) {
      console.log(`${people['name']}`);
    }
  }
};

// Handle errors with .catch() chained after the function call
getMoreData().catch(error => {
  console.error(error);
});
```

## Error Handling Best Practices

### Try/Catch Blocks

When using try/catch blocks within async functions:

1. **Always rethrow errors** to allow external error handling
2. **Provide meaningful error messages** with context
3. **Log errors appropriately** for debugging purposes

### External Error Handling

- Use `.catch()` method when calling async functions
- Allows separation of business logic from error handling
- Cleaner function structure when error handling is consistent

## Sequential vs Parallel Execution

Understanding the difference between sequential and parallel execution is crucial for optimising async function performance.

### Sequential Execution

Each `await` statement blocks execution until the previous Promise resolves:

```javascript
const getPokemon = async function () {
  try {
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2'); // Waits for poke1
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3'); // Waits for poke2

    // These console.log() only run after each await in turn has been settled
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
```

**Use case**: When requests depend on each other or when you need to control the order of execution.

### Parallel Execution (Manual)

Start all requests simultaneously, then await their results:

```javascript
const getMorePokemon = async function () {
  try {
    // These lines will run almost at once and in parallel
    const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/4');
    const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/5');
    const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/6');

    // Now we wait for all of them but they're running in parallel
    // Store them in new variables to get the settled value, not the Promise
    const poke4 = await promise1;
    const poke5 = await promise2;
    const poke6 = await promise3;

    // All console.log() methods will run after all Promises are settled
    console.log(poke4.data.name);
    console.log(poke5.data.name);
    console.log(poke6.data.name);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
```

### Parallel Execution with Promise.all()

A more elegant approach using `Promise.all()`:

```javascript
const getEvenMorePokemon = async function () {
  const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/7');
  const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/8');
  const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/9');
  
  const results = await Promise.all([promise1, promise2, promise3]);

  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
};
```

**Advantages of Promise.all():**
- Cleaner, more readable code
- Built-in error handling (if one Promise fails, all fail)
- Guaranteed parallel execution
- Returns results in the same order as input array

## Performance Considerations

### When to Use Sequential Execution

- **Dependent requests**: When subsequent requests need data from previous ones
- **Rate limiting**: When APIs have strict rate limits
- **Memory constraints**: When processing large amounts of data sequentially

### When to Use Parallel Execution

- **Independent requests**: When requests don't depend on each other
- **Performance critical**: When minimising total execution time is important
- **Multiple API endpoints**: When fetching data from different sources simultaneously

## Common Patterns

### API Data Fetching

```javascript
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(`/api/users/${userId}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
```

### Multiple Related Requests

```javascript
const fetchUserProfile = async (userId) => {
  try {
    // Parallel execution for independent data
    const [user, posts, comments] = await Promise.all([
      fetch(`/api/users/${userId}`).then(r => r.json()),
      fetch(`/api/users/${userId}/posts`).then(r => r.json()),
      fetch(`/api/users/${userId}/comments`).then(r => r.json())
    ]);
    
    return { user, posts, comments };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
```

## Best Practices

1. **Always handle errors** appropriately with try/catch or .catch()
2. **Rethrow errors** in try/catch blocks for external handling
3. **Use parallel execution** when requests are independent
4. **Provide meaningful error messages** with context
5. **Check response status** before processing data
6. **Use Promise.all()** for cleaner parallel execution
7. **Consider timeout handling** for network requests
8. **Avoid mixing async/await with .then()** in the same function