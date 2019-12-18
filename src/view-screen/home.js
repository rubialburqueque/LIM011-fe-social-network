
export default () => {
  const viewHome = `
    <section id="home ><p class="titulo">!Bienvenida!</p>
    <form id="log">
      <span class="icon-user"></span>
      </br>
      <input id="username" type="text" name="user" placeholder="Ingresar usuario aquí">
      </br>
      <span class="icon-key"></span>
      </br>
      <input id="password" type="password" name="password" placeholder="Ingresar contraseña aquí">
      <p id="error-message" class="text-center error-message"></p>
    </form>
    <p>O bien ingresa con ...</p>
    </br>
    <span class="icon-gplus"></span>
    <span class="icon-facebook-circled"></span>
    <span class="icon-twitter"></span>
    </br>
    <input id="login" type="button" value="INGRESA" class="button-w">
    <p>¿No tienes una cuenta? <a href="#/register">Regístrate</a></p>
    </section>
    <section><img src = "./imagen/computadora.png" alt="" class = "logo-computer"/></section>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;

  const registers = JSON.parse(localStorage.getItem('registro'));
  const btnLogin = divElemt.querySelector('#login');
  // eslint-disable-next-line no-console
  console.log(registers);
  btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    const emailUsuario = divElemt.querySelector('#username').value;
    // eslint-disable-next-line no-console
    console.log(emailUsuario);
    const contraseñaUsuario = divElemt.querySelector('#password').value;
    const usuarios = registers.filter(registro => registro.correo === emailUsuario
      && registro.contraseña === contraseñaUsuario);
    if (usuarios.length >= 1) {
      localStorage.setItem('nombreUsuario', usuarios[0].nombre);
      // eslint-disable-next-line no-restricted-globals
      location.href = '#/foro';
    } else {
      divElemt.querySelector('#error-message').innerHTML = 'email o contraseña incorrecta';
    }
  });

  return divElemt;
};
