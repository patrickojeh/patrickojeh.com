import { load as initSPA } from './spa.js';

window.addEventListener('popstate', () => {
  initSPA(document.location.pathname, false);
});
