export default () => {
  const viewForo = `
  <section id="foro" ><p class="titulo">girl ASK</p>
    <div id = "perfil">
      <img src = "../imagen/foto.jpeg" class = "foto" /><p id = "nombre"></p>
    </div>
    </br>
    <input id="commit" type="text" placeholder="¿Que quieres compartir?....">
    </br>
    <button type="button" id="share">compartir</button>
    <div>
    <section id = "commits"> 
      <p id = "name-user"></p>
      <p id = "fecha"></p>
      <p id = "commitPublicado"></p>
      
    </section>
    </div>
  </section>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewForo;

  divElemt.querySelector('#nombre').innerHTML = localStorage.getItem('nombreUsuario');

  let text = [];

  const btnCompartir = divElemt.querySelector('#share');
  btnCompartir.addEventListener('click', () => {
    divElemt.querySelector('#name-user').innerHTML = localStorage.getItem('nombreUsuario');
    text += divElemt.querySelector('#commit').value;
    divElemt.querySelector('#commits').innerHTML = text;
  });
  return divElemt;
};

/* let text = [];
text += divElemt.querySelector('#commit').value;
const createElement = (comentario) => {
  let commits = '';
  for (let i = 0; i < comentario.length; i += 1) {
    commits += `
      <p id = "name-user"><strong>${comentario[i].name}</strong></p>
      <p id = "fecha"></p>
      <p id = "commitPublicado"><strong>${text}</strong></p>
      `;
  }
  divElemt.querySelector('#commits').innerHTML = commits;
};
 const btnCompartir = divElemt.querySelector('#share');
btnCompartir.addEventListener('click', () => {
  text  = commits;
  createElement(text);
} */
