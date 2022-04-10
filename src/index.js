import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import * as FetchServise from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const country = FetchServise.fetchCountries('Ukraine');
console.log(country);

Notify.info('Too many matches found. Please enter a more specific name.');
Notify.failure('Oops, there is no country with that name');
