import SPA from './spa.js';
import init from './app.js';

(function () {
  window.addEventListener('popstate', () =>
    SPA(document.location.pathname, false),
  );

  init();
})();
