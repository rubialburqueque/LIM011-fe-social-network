import { changeTmp } from './view-controller/router.js';
/* import { correcRegister } from './function.js'; */

const init = () => {
  changeTmp(window.location.hash);
  window.addEventListener('hashchange', () => changeTmp(window.location.hash));
};
window.addEventListener('load', init);
