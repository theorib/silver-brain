// Async functions always return a promise even though you don't write that explicitly. That promise can be consumed using .then() and .catch()
// If we want the promise to be rejected, all we need to do is `throw` something. Can be a new Error() can be a string, anything using the keyword throw
// The await keyword, means that tha async function will only continue executing after a promise has been settled on the line with await. Otherwise the function is paused
// When using Try/Catch blocks, it's good practice to re-throw the error so it can be caught down the line
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

    // Important to rethrow the error so it can be caught outside the async function in a catch() method for example.
    throw error;
  }
};
getData();

// We can also handle errors with catch() chained after the function runs so we don't need to handle them with a try catch block inside the function
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
getMoreData().catch(error => {
  console.error(error);
});

/*************************
 * Sequential vs Parallel requests
 *
 */

// Sequential requests. the next line will only run after the awaited line has been settled.
const getPokemon = async function () {
  try {
    const poke1 = await axios.get('https://pokeapi.co/api/v2/pokemon/1');
    const poke2 = await axios.get('https://pokeapi.co/api/v2/pokemon/2'); // this line only runs after the previous
    const poke3 = await axios.get('https://pokeapi.co/api/v2/pokemon/3'); // this line only runs after the previous

    // These console.log() only run after each await in turn has been settled.
    console.log(poke1.data);
    console.log(poke2.data);
    console.log(poke3.data);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
// getPokemon();

// Parallel Requests (doing it manually)
const getMorePokemon = async function () {
  try {
    // These lines will run almost at once and in parallel
    const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/4');
    const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/5');
    const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/6');

    // Now we wait for all of them almost in parallel but we need to store them in a new variable to get the result of the promise, othersise, if we just await for promise1,2,3 we will get primise responses in the variable not the settled value
    const poke4 = await promise1;
    const poke5 = await promise2;
    const poke6 = await promise3;

    // Then all of these console.log() methods will run
    console.log(poke4.data.name);
    console.log(poke5.data.name);
    console.log(poke6.data.name);
  } catch (err) {
    console.error(err);
    throw err;
  }
};
getMorePokemon();

// ! This is a manual way to solve parallel requests
// !A More elegant way using Promise.all()
const getEvenMorePokemon = async function () {
  const promise1 = axios.get('https://pokeapi.co/api/v2/pokemon/7');
  const promise2 = axios.get('https://pokeapi.co/api/v2/pokemon/8');
  const promise3 = axios.get('https://pokeapi.co/api/v2/pokemon/9');
  const results = await Promise.all([promise1, promise2, promise3]);

  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
};
getEvenMorePokemon();
