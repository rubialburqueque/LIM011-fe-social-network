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
    </form>
    <p>O bien ingresa con ...</p>
    </br>
    <span class="icon-google"></span>
    <span class="icon-facebook"></span>
    <span class="icon-twitter"></span>
    </br>
    <input id="login" type="button" value="INGRESA" class="button-w">
    <input id="register" type="button" value="REGISTRATE" class="button-f">
    </section>
    <section><img src = "img/computadora.png" alt="" class = "img-principal"/></section>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewHome;
  return divElemt;
};
