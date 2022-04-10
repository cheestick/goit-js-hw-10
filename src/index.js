import './css/styles.css';
import { Notify } from 'notiflix';
import debounce from 'lodash.debounce';
import * as FetchServise from './js/fetchCountries';

const DEBOUNCE_DELAY = 300;

const country = FetchServise.fetchCountries('Ukraine');
console.log(country);
