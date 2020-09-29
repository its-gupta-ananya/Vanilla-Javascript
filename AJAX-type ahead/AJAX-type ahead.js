const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
// Returns a promise
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data)); // ... used to change array into psuh method ( proper cities spreading)

function findMatches(wordtoMatch, cities) {
  return cities.filter((place) => {
    // Find matrching state or cities
    const regex = new RegExp(wordtoMatch, "gi"); // g -- global , i == case insensitive
    return place.city.match(regex) || place.state.match(regex);
  });
}
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cname = place.city.replace(
        regex,
        `<span class="hl"> ${this.value}</span`
      );
      const sname = place.state.replace(
        regex,
        `<span class="hl"> ${this.value}</span`
      );
      return `
    <li>
        <span class= 'name'> ${cname} , ${sname} </span>
        <span class="population'> ${place.population} </span>
    </li>
    `;
    })
    .join();
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
