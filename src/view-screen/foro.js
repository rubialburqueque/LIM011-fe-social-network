import { showComentarios } from './contact.js';
import { guardarPost } from '../function.js';

export default () => {
  const viewForo = `
  <section id="foro" ><p class="titulo">girl ASK</p>
    <div id = "addComent">
      <img src = "../imagen/foto.jpeg" class = "foto" /><p id = "nombre"></p>
    </div>
    </br>
    <input id="commit" type="text" placeholder="¿Que quieres compartir?....">
    </br>
    <button type="button" id="share">compartir</button>
    <div>
    <section id = "commits"> 
    
    </section>
    </div>
  </section>`;

  const divElemt = document.createElement('div');
  /* divElemt.classList.add('position'); */
  divElemt.innerHTML = viewForo;

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
