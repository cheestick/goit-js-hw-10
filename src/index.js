import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import * as FetchServise from './js/fetchCountries';
import refs from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

Notify.info('Too many matches found. Please enter a more specific name.');
Notify.failure('Oops, there is no country with that name');

function onInputChange(event) {
  const countryName = event.target.value.trim();
  if (countryName === '') {
    clearCountriesList(refs.countryList);
    Notify.warning('Fill country name field!');
    return;
  }
  const countriesList = FetchServise.fetchCountries(countryName);
  countriesList.then(renderCountriesList);
}

function createCountryListItemMarkup({ flags: { svg }, name: { official } }) {
  return `<li><img src="${svg}" alt="${official} flag"/><span>${official}</span></li>`;
}

function renderCountriesList(list) {
  const listMarkup = list.map(createCountryListItemMarkup).join('');
  refs.countryList.innerHTML = listMarkup;
}

function clearCountriesList(listRef) {
  listRef.innerHTML = '';
}
