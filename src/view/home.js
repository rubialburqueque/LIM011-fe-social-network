export default () => {
  const viewHome = `
  <h2> < codebook > </h2>
  <p>!Bienvenida, Coder!</p>
  <input type = "text" placeholder = "email" id = "email"><br/>
  <input type = "text" placeholder = "contraseña"  id = "contraseña"><br/>
  <a href = "#/perfil" id = "login">log in</a>
  <p>O bien ingresa con ...</p>
  <img src = "imagen/face.jpg" class = "social"  /> <a href = "#/perfil"></a>
  <img src = "imagen/google.jpg" class = "social1" href = "#/perfil"/>
  <p>No tienes cuenta? <a href = "#/registrar">Registrate</a> </p>
    `;
  const divElem = document.createElement('div');
  divElem.classList.add('position');
  divElem.innerHTML = viewHome;
  return divElem;
};
