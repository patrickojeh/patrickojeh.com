import { getDate, getMilliSecondsLeft } from './utils/index.js';

const renderDate = () => {
  const date = getDate();

  const splitDate = date.split(':').join('<i>:</i>');

  const container = document.querySelector('.primary-footer .date');

  container.innerHTML = splitDate;
};

const renderCopyrightYear = () => {
  const timestamp = new Date();

  const year = timestamp.getFullYear();

  const container = document.querySelector('.primary-footer #year');

  container.innerHTML = year;
};

const init = () => {
  renderCopyrightYear();
  renderDate();

  setInterval(() => renderDate(), getMilliSecondsLeft());
};

export default init;
