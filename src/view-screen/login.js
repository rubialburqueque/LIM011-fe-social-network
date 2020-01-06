
export default () => {
  const viewHome = `
    <section id="home">
      <h1><img src="./imagen/computadora.png" class="comput"> </h1>
      <p class="titulo"><strong>!Bienvenida!</strong></p>
      <form id="log">
        <span class="icon-user-circle-o marginHome"></span>
        <input id="userName" type="text" name="user" placeholder="Ingresar usuario" class="inputsHome">
        </br>
        <span class="icon-lock marginHome"></span>
        <input id="password" type="password" name="password" placeholder="Ingresar contraseña" class="inputsHome">
        <p id="error-message" class="text-center error-message"></p>
      </form>
      </br>
      <p>Tambien puedes ingresar con ...</p>
      </br>
      <section class="icons">
        <span class="icon-google marginHome"></span>
        <span class="icon-facebook marginHome"></span>
        </section>
      </br>
      <input id="login" type="button" value="INGRESA" class="button">
      <p><strong>¿No tienes una cuenta?<br><a href="#/register" class="icons">Regístrate</a></strong></p>
    </section>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;
  const registers = JSON.parse(localStorage.getItem('registro'));
  const btnLogin = divElemt.querySelector('#login');
  // eslint-disable-next-line no-console
  console.log(registers);
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const emailUsuario = divElemt.querySelector('#userName').value;
    const contraseñaUsuario = divElemt.querySelector('#password').value;
    const usuarios = registers.filter(registro => registro.correo === emailUsuario
            && registro.contraseña === contraseñaUsuario);
    if (usuarios.length >= 1) {
      localStorage.setItem('nombreUsuario', usuarios[0].nombre);
      localStorage.setItem('idUsuario', usuarios[0].id);
      // eslint-disable-next-line no-restricted-globals
      location.href = '#/foro';
    } else {
      divElemt.querySelector('#error-message').innerHTML = 'email o contraseña incorrecta';
    }
  });

  return divElemt;
};
