import { getDate } from './utils/index.js';

export const renderDate = () => {
  const date = getDate();

  const splitDate = date.split(':').join('<i>:</i>');

  const container = document.querySelector('.primary-footer .date');

  container.innerHTML = splitDate;
};

export const renderCopyrightYear = () => {
  const timestamp = new Date();

  const year = timestamp.getFullYear();

  const container = document.querySelector('.primary-footer #year');

  container.innerHTML = year;
};
