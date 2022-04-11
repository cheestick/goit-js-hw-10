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

function processErrorMessage({ message }) {
  if (message == -1) {
    info();
  }
  if (message == 404) {
    failure();
  }
}
export { info, warning, failure, processErrorMessage };
