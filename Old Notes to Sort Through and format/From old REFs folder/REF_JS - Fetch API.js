// Fech using
fetch('https://swapi.dev/api/planets/')
  .then(response => {
    // fetch always returns a response even if it's a 404 error
    // We check if the response is ok
    if (response.ok) return response.json();
    // If the response is not ok, we throw a new error to be caught further down the chain
    else {
      throw new Error(`Problem fetching, status:${response.status}`);
    }
  })
  .then(data => {
    // guard clause
    if (!data) throw new Error('Fetch data not valid');

    console.log(`Results from fetch only once:`);
    for (let planet of data.results) {
      console.log(`${planet['name']}`);
    }
    console.log(`--------------------------
xxxxxx
--------------------------`);
  })
  .catch(reject => console.error(reject));

// Chainig fetch requests
// We encapsulate the fetch request into a function with a default URL
const fetchPlanets = (url = 'https://swapi.dev/api/planets/') => fetch(url);

// Encapsulate the error handling and json parsing frunctionality
const checkResponseParse = response => {
  if (response.ok) return response.json();
  else {
    throw new Error(`Problem fetching, status:${response.status}`);
  }
};
// Encapsulate printing the planets and returning the next url to be parsed
const printPlanets = data => {
  console.log(`Results from Printing 10 planets:`);
  for (let planet of data.results) {
    console.log(`${planet['name']}`);
  }
  console.log(`--------------------------
xxxxxx
--------------------------`);
  // First we check if there is a next page of planets.
  // Then, to be able to keep use=ing the then method, we need to return another promise.
  // We use Promise.resolve() to return a fullfilled promise with the data that we want.
  if (data.next) return Promise.resolve(data.next);
};

// Then we can just chain all of the parts one after the other.
// At the end of the chain we add a catch method
fetchPlanets()
  .then(checkResponseParse)
  .then(printPlanets)
  .then(fetchPlanets)
  .then(checkResponseParse)
  .then(printPlanets)
  .then(fetchPlanets)
  .then(checkResponseParse)
  .then(printPlanets)
  .then(fetchPlanets)
  .then(checkResponseParse)
  .then(printPlanets)
  .then(fetchPlanets)
  .then(checkResponseParse)
  .then(printPlanets)
  .then(fetchPlanets)
  .then(checkResponseParse)
  .then(printPlanets)
  .catch(reject => console.error(reject));

const fetchData = function (
  url,
  errorMessage = 'Something went wrong with fetchData.'
) {
  const promise = fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errorMessage} Status ${response.status}`);
    }
    return response.json();
  });
  return promise;
};
