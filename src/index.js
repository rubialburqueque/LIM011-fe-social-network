/* import { example } from './example.js';
example(); */
import { changeView } from './view-controler/controla.js';

const init = () => {
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);

/* const inputCorreo = document.getElementById('email');
inputCorreo.addEventListener('keypress', () => {
const verificar = document.getElementById('email').value;
const verificar1 = document.getElementById('contraseña').value;
document.getElementById('email', 'contraseña').value = ;
}); */
