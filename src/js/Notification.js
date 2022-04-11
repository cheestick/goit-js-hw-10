import { Notify } from 'notiflix';

function info() {
  Notify.info('Too many matches found. Please enter a more specific name.');
}

function warning() {
  Notify.warning('Fill country name field!');
}

function failure() {
  Notify.failure('Oops, there is no country with that name');
}
export { info, warning, failure };
