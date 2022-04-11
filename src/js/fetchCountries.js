const URL_COUNTRIES = 'https://restcountries.com/v3.1';
const filter = new URLSearchParams({
  fields: `name,capital,population,flags,languages`,
});

function fetchCountries(name) {
  const path = `/name/${name}`;
  const url = URL_COUNTRIES + path + `?${filter}`;
  const countries = fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });

  return countries;
}

export { fetchCountries };
