import { correctRegister } from '../function.js';

export default () => {
  const viewRegister = `
    <div class="container">
    <form id="formRegister">
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name" value="naty">
        <label for="lastNames">Apellidos:</label>
        <input type="text" name="lastName" id="lastName" value="lino">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" value="naty@4393">
        <label for="brithday">Cumpleaños</label>
        <input type="text" name="brithday" id="brithday" value="545">
        <label for="password">password:</label>
        <input type="password" name="password" id="password" value="dbchdbsk">
        <label for="confirmPassword">Confirmar contraseña</label>
        <input type="password" name="confirmPassword" id="confirmPassword" value="hsdiucbd">
        <button type="checkbox" id="acepto"></button>
        <label for="acepto">He leído los términos y acepto.</label>
        <input type="submit">
    </form>
</div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewRegister;
  const formRegister = divElemt.querySelector('#formRegister');
  console.log(formRegister)
  formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('ingresa al button');
    const elementsRegister = formRegister.elements;
    const regex = /\S+@\S+\.\S+/;
    if (elementsRegister.password.value.length >= 6 && elementsRegister.password.value === elementsRegister.confirmPassword.value) {
      if (regex.test(elementsRegister.email.value) === true) {
        correctRegister(elementsRegister.name.value,
          elementsRegister.lastName.value,
          elementsRegister.email.value,
          elementsRegister.brithday.value,
          elementsRegister.password.value,
          elementsRegister.confirmPassword.value);
      }
    } else {
      alert('Las contraseñas no son iguales');
    }
  });
  return divElemt;
};
