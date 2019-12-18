

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
    </section>
    </div>
  </section>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewForo;

  // divElemt.querySelector('#nombre').innerHTML = localStorage.getItem('nombreUsuario');
  const btnCompartir = divElemt.querySelector('#share');
  btnCompartir.addEventListener('click', () => {
    const objpost = {
      nombre: localStorage.getItem('nombreUsuario'),
      texto: divElemt.querySelector('#commit').value,
    };
 // localStorage.setItem('posts', ([objpost]));
    localStorage.setItem('posts', JSON.stringify([objpost]));
    /* divElemt.querySelector('#name-user').innerHTML = localStorage.getItem('nombreUsuario');
    // divElemt.querySelector('#fecha').innerHTML = fecha;
    text += divElemt.querySelector('#commit').value;
    divElemt.querySelector('#commit-publicado').innerHTML = text;

    console.log(viewContact); */
  });
  return divElemt;
};
/* const createElement = (comentario) => {
    let commits = '';
    for (let i = 0; i < comentario.length; i++ ) {
      commits += `
      <section>
        <p id = "name-user"></p>
        <p id = "fecha"></p>
        <p id = "commitPublicado"></p>
        </section>
        `;
    }
    divElemt.querySelector('#commits').innerHTML = commits;
  };
  let text = [];
  const btnCompartir = divElemt.querySelector('#share');
  btnCompartir.addEventListener('click', () => {
    divElemt.querySelector('#name-user').innerHTML = localStorage.getItem('nombreUsuario');
    // divElemt.querySelector('#fecha').innerHTML = fecha;
    text += divElemt.querySelector('#commit').value;
    divElemt.querySelector('#commit-publicado').innerHTML = text;
  }); */
/* let text = [];
text += divElemt.querySelector('#commit').value; */
