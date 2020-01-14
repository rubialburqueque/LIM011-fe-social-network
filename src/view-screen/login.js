
export default () => {
  const viewHome = `
    <section class ="wrapper" id="home">
    <div class="imgLogin">
    <h1><img src="./imagen/computadora.png"> </h1>
    </div>
    <div class="partLogin">
      <p>!Bienvenida!</p>
      <form id="log">
        <span class="icon-user-circle-o iconClass"></span>
        <input id="userName" type="text" name="user" placeholder="Ingresar usuario" class="inputsHome">
        </br>
        <span class="icon-lock iconClass"></span>
        <input id="password" type="password" name="password" placeholder="Ingresar contraseña" class="inputsHome">
        <p id="error-message" class="text-center error-message"></p>
      </form>
      </br>
      <p>Tambien puedes ingresar con ...</p>
      </br>
      <section>
        <span class="icon-google iconClass"></span>
        <span class="icon-facebook iconClass"></span>
        </section>
      </br>
      <input id="login" type="button" value="INGRESA" class="button">
      <p>¿No tienes una cuenta?<br><a href="#/register" class="icons">Regístrate</a></p>
      </div>
    </section>`;

  const divElemt = document.createElement('div');
  divElemt.innerHTML = viewHome;
  // divElemt.className='wrapper';
  const registers = JSON.parse(localStorage.getItem('registro'));
  const btnLogin = divElemt.querySelector('#login');
  // eslint-disable-next-line no-console
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
