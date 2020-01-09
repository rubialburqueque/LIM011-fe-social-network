import { elementoPost } from './comments.js';
import { getItemLocalStorage, agregaObjPostAlArr, saveItemLocalStorage } from '../function.js';

export default () => {
  const viewForo = `
  <section id="foro"><p class="titulo">Girl Ask</p>
    <div id = "addComent">
      <img src = "./imagen/foto.jpeg" class = "foto" /><p id = "nombre"></p>
    </div>
    </br>
    <input id="commit" class="ePosts" type="text" placeholder="¿Qué estás pensando?">
    </br>
    <select id="publicOrNot">
    <option value="publico">Comentario Público</option>
    <option value="privado">Comentario Privado</option>
    </select>
    <button type="button" class="button"  id="share">compartir</button>
    <div>
    <section id = "commits"> 
    
    </section>
    </div>
  </section>`;

  const divElemt = document.createElement('div');
  /* divElemt.classList.add('position'); */
  divElemt.innerHTML = viewForo;

  divElemt.querySelector('#nombre').innerHTML = localStorage.getItem('nombreUsuario');

  const btnCompartir = divElemt.querySelector('#share');

  btnCompartir.addEventListener('click', () => {
    const post = divElemt.querySelector('#commit').value;
    const dataDePosts = getItemLocalStorage('posts');
    const nombre = getItemLocalStorage('nombreUsuario');
    const arrNuevo = agregaObjPostAlArr(post, JSON.parse(dataDePosts), nombre);
    saveItemLocalStorage('posts', arrNuevo);
    const infoPost = JSON.parse(getItemLocalStorage('posts'));
    infoPost.forEach((dataDeUnPost, index) => {
      const nodoPost = elementoPost(dataDeUnPost, index);
      divElemt.querySelector('#commits').appendChild(nodoPost);
    });
  });
  return divElemt;
};
