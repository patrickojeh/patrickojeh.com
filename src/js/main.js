import { load as initSPA} from "./spa.js";

window.addEventListener('popstate', function (e) {
  initSPA(document.location.pathname, false);
});