
axios.defaults.headers.common['x-api-key'] = 'live_riopDNi4TdzDIRAJ4eECVs9XR3Uex6kBCDtCgNXZXOk1nYIsQM8z6yuZH3qPKIJs';

async function fetchBreeds() {
  try {
    const response = await axios.get('https://api.thecatapi.com/v1/breeds');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch breeds');
  }
}

async function fetchCatByBreed(breedId) {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
    return response.data[0];
  } catch (error) {
    throw new Error('Failed to fetch cat details');
  }
}

window.fetchBreeds = fetchBreeds;
window.fetchCatByBreed = fetchCatByBreed;
