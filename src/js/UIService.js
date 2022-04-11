import refs from './refs';

function render(list) {
  const listLength = list.length;
  console.log(listLength);
  if (listLength > 10) {
    console.log('Request has too many countries. Enter more specific name.');
    throw new Error(-1);
  }

  if (listLength > 1) {
    refs.countryList.innerHTML = list.map(createItemMarkup).join('');
    return;
  }

  refs.countryInfo.innerHTML = cardMarkup(list);
}

function clearComponent(listRef) {
  listRef.innerHTML = '';
}

function createItemMarkup({ flags: { svg }, name: { official } }) {
  return `
    <li class="country-header">
      <img class="flag" src="${svg}" alt="${official} flag"/>
      <span>${official}</span>
    </li>`;
}

function cardMarkup({ name: { official }, flags: { svg }, capital, population, languages }) {
  return `
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
}

export { render, clearComponent };
