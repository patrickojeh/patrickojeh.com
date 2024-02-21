import { getDate } from './utils/index.js';

export const renderDate = () => {
  const date = getDate();

  const splitDate = date.split(':').join('<i>:</i>');

  const container = document.querySelector('.primary-footer .date');

  container.innerHTML = splitDate;
};
