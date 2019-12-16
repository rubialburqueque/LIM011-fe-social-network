export default () => {
  const viewForo = `
  <section id="foro" ><p class="titulo">girl ASK</p>
    <div id = "perfil">
      <img src = "../imagen/foto.jpeg" class = "foto" /><p id = "nombre"></p>
    </div>
    </br>
    <input id="comit" type="text" placeholder="¿Que quieres compartir?....">
    </br>
    <button type="button" id="share">compartir</button>
    <div>
    <section id = "comits"> 
      <p id = "name-user"></p>
      <p id = "fecha"></p>
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
    text += divElemt.querySelector('#comit').value;
    divElemt.querySelector('#comits').innerHTML = text;
    divElemt.querySelector('#name-user').innerHTML = localStorage.getItem('nombreUsuario');
  });

  return divElemt;
};
