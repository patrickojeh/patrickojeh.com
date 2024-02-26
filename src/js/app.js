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

const scrollSectionHide = () => {
  window.addEventListener('scroll', () => {
    const section = document.querySelector('.intro__photos');
    const scrolled = document.documentElement.getBoundingClientRect().top;

    if (!document.contains(section)) return;

    if (scrolled < -200) {
      section.classList.add('hide');
    } else {
      section.classList.remove('hide');
    }
  });
};

const init = () => {
  scrollSectionHide();
  renderCopyrightYear();
  renderDate();

  setInterval(() => renderDate(), getMilliSecondsLeft());
};

export default init;
