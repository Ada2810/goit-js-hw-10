const e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".error"),o=document.querySelector(".cat-info");function a(){t.classList.add("show")}function s(){t.classList.remove("show")}function i(e){n.textContent=e,n.classList.add("show")}function r(){n.classList.remove("show")}async function c(){a(),r();try{var t;t=await window.fetchBreeds(),e.innerHTML=t.map(e=>`<option value="${e.id}">${e.name}</option>`).join(""),e.classList.add("show")}catch(e){i("Oops! Something went wrong! Try reloading the page!")}finally{s()}}e.addEventListener("change",async()=>{let t=e.value;if(t){a(),r(),o.classList.remove("show");try{let e=await window.fetchCatByBreed(t);!function(e){if(!e||!e.breeds||0===e.breeds.length){i("Cat details not available");return}let{name:t,description:n,temperament:a}=e.breeds[0];o.innerHTML=`
    <img src="${e.url}" alt="${t}" style="max-width: 100%; height: auto;">
    <h2>${t}</h2>
    <p>${n}</p>
    <p><strong>Temperament:</strong> ${a}</p>
  `,o.classList.add("show")}(e)}catch(e){i("Oops! Could not fetch cat details!")}finally{s()}}}),document.addEventListener("DOMContentLoaded",c);
//# sourceMappingURL=index.72014540.js.map
