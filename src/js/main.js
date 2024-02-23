import { load as initSPA } from './spa.js';
import { renderDate, renderCopyrightYear } from './app.js';
import { getMilliSecondsLeft } from './utils/index.js';

(function () {
  window.addEventListener('popstate', () =>
    initSPA(document.location.pathname, false),
  );

  renderCopyrightYear();
  renderDate();

  setInterval(() => renderDate(), getMilliSecondsLeft());
})();
