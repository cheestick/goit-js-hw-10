import refs from './refs';

function createItemMarkup({ flags: { svg }, name: { official } }) {
  return `
    <li class="country-header">
      <img class="flag" src="${svg}" alt="${official} flag"/>
      <span>${official}</span>
    </li>`;
}

function renderList(list) {
  const listMarkup = list.map(cardMarkup).join('');
  refs.countryList.innerHTML = listMarkup;
}

function clearComponent(listRef) {
  listRef.innerHTML = '';
}

function cardMarkup({ name: { official }, flags: { svg }, capital, population, languages }) {
  const markup = `
    <h3 class="country-header">
      <img class="flag" src="${svg}" alt="${official} flag"/><span>${official}</span>
    </h3>
    <div class="info-field">
      <span class="caption">Capital: </span><span>${official}</span>
    </div>
    <div class="info-field">
      <span class="caption">Population: </span><span>${population}</span>
    </div>
    <div class="info-field">
      <span class="caption">Languages: </span><span>${Object.values(languages).join(', ')}</span>
    </div>
      `;
  refs.countryInfo.innerHTML = markup;
}

export { renderList, clearComponent, cardMarkup };
