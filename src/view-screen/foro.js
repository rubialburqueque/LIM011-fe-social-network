export default () => {
  const viewForo = `
  <section id="foro" ><p class="titulo">girl ASK</p>
  <form id="foro">
  <div id = "perfil">
  <img src = "../imagen/foto.jpeg" class = "foto" />
  <p id = "nombre"></p>
  </div>
    </br>
    <input id="comentario" type="text" placeholder="¿Que quieres compartir?....">
    </br>
    <button type="button" id="compartir">compartir</button>
  </form>
  <p>O bien ingresa con ...</p>
    </section>
  <section><img src = "img/computadora.png" alt="" class = "img-principal"/></section>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewForo;

  divElemt.querySelector('#nombre').innerHTML = localStorage.getItem('nombreUsuario');
  return divElemt;
};
