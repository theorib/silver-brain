// remember to import in your html file:
// <script defer src="https://unpkg.com/axios@1.1.2/dist/axios.min.js"></script>

const temp = axios
  .get('https://swapi.dev/api/species/3/')
  .then(response => console.log(response.data))
  .catch(error => console.error(error));

// Chaining axios requests, all you need is to return another axios requests
axios
  .get('https://swapi.dev/api/planets/')
  .then(response => {
    for (let planet of response.data.results) {
      console.log(planet.name);
    }
    return axios.get(response.data.next);
  })
  .then(response => {
    for (let planet of response.data.results) {
      console.log(planet.name);
    }
    return axios.get(response.data.next);
  })
  .then(response => {
    for (let planet of response.data.results) {
      console.log(planet.name);
    }
    return axios.get(response.data.next);
  })
  .catch(error => console.error(error));
