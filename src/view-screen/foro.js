import { showComentarios } from './contact.js';

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

  const btnCompartir = divElemt.querySelector('#share');
  btnCompartir.addEventListener('click', () => {
    if (localStorage.getItem('posts') === null) {
      const objPost1 = {
        nombre: localStorage.getItem('nombreUsuario'),
        texto: divElemt.querySelector('#commit').value,
      };
      localStorage.setItem('posts', JSON.stringify([objPost1]));
    } else {
      const dataPosts1 = JSON.parse(localStorage.getItem('posts'));
      const objPost = {
        nombre: localStorage.getItem('nombreUsuario'),
        texto: divElemt.querySelector('#commit').value,
      };
      dataPosts1.push(objPost);
      localStorage.setItem('posts', JSON.stringify(dataPosts1));
      // console.log(dataPosts1);
      divElemt.querySelector('#commits').innerHTML = showComentarios(JSON.parse(localStorage.getItem('posts')));
    }
  });

  return divElemt;
};
