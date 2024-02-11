import { load as initSPA} from './spa.js';

window.addEventListener("popstate", (e ) => {
  initSPA(document.location.pathname, 
    false)
});
