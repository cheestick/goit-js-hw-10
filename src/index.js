import './css/styles.css';
import debounce from 'lodash.debounce';
import * as FetchServise from './js/fetchCountries';
import * as Notification from './js/Notification';
import refs from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event) {
  const countryName = event.target.value.trim();
  if (countryName === '') {
    clearCountriesList(refs.countryList);
    Notification.warning();
    return;
  }
  const countriesList = FetchServise.fetchCountries(countryName).catch(Notification.failure);
  console.log(countriesList);
  countriesList.then(renderCountriesList); //TODO: есть проблема с рендером undefined когда страна не найдена
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
