import { showComentarios } from './comments.js';
import { guardarPost } from '../function.js';

export default () => {
  const viewForo = `
  <section id="foro" ><p class="titulo">girl ASK</p>
    <div id = "addComent">
      <img src = "../imagen/foto.jpeg" class = "foto" /><p id = "nombre"></p>
    </div>
    </br>
    <input id="commit" class="ePosts" type="text" placeholder="¿Qué estás pensando?">
    </br>
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
    guardarPost(post)
      .then((res) => {
        divElemt.querySelector('#commits').innerHTML = showComentarios(res);
      });
  });

  return divElemt;
};
