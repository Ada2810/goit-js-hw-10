const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const errorText = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function showLoader() {
  loader.classList.add('show');
}

function hideLoader() {
  loader.classList.remove('show');
}

function showError(message) {
  errorText.textContent = message;
  errorText.classList.add('show');
}

function hideError() {
  errorText.classList.remove('show');
}

function displayCatInfo(cat) {
  if (!cat || !cat.breeds || cat.breeds.length === 0) {
    showError('Cat details not available');
    return;
  }

  const { name, description, temperament } = cat.breeds[0];
  catInfo.innerHTML = `
    <img src="${cat.url}" alt="${name}" style="max-width: 100%; height: auto;">
    <h2>${name}</h2>
    <p>${description}</p>
    <p><strong>Temperament:</strong> ${temperament}</p>
  `;
  catInfo.classList.add('show');
}

async function loadBreeds() {
  showLoader();
  hideError();

  try {
    const breeds = await window.fetchBreeds();
    populateBreedSelect(breeds);
    breedSelect.classList.add('show');
  } catch (error) {
    showError('Oops! Something went wrong! Try reloading the page!');
  } finally {
    hideLoader();
  }
}

function populateBreedSelect(breeds) {
  breedSelect.innerHTML = breeds.map(breed => `<option value="${breed.id}">${breed.name}</option>`).join('');
}

breedSelect.addEventListener('change', async () => {
  const breedId = breedSelect.value;
  if (!breedId) return;

  showLoader();
  hideError();
  catInfo.classList.remove('show');

  try {
    const cat = await window.fetchCatByBreed(breedId);
    displayCatInfo(cat);
  } catch (error) {
    showError('Oops! Could not fetch cat details!');
  } finally {
    hideLoader();
  }
});

document.addEventListener('DOMContentLoaded', loadBreeds);
