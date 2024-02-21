import { load as initSPA } from './spa.js';
import { renderDate } from './app.js';
import { getMilliSecondsLeft } from './utils/index.js';

window.addEventListener('popstate', () =>
  initSPA(document.location.pathname, false),
);

renderDate();

setInterval(() => renderDate(), getMilliSecondsLeft());
