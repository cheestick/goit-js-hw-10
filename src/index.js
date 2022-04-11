import './css/styles.css';
import debounce from 'lodash.debounce';
import * as FetchServise from './js/fetchCountries';
import * as Notification from './js/Notification';
import * as UIService from './js/UIService';
import refs from './js/refs';

const DEBOUNCE_DELAY = 300;

refs.searchBox.addEventListener('input', debounce(onInputChange, DEBOUNCE_DELAY));

function onInputChange(event) {
  const countryName = event.target.value.trim();
  if (countryName === '') {
    Notification.warning();
    return;
  }

  FetchServise.fetchCountries(countryName)
    .then(UIService.render)
    .catch(Notification.processErrorMessage);
}
