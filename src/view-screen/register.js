import { correctRegister } from '../function.js';

export default () => {
  const viewRegister = `
    <div class="container-register">
    <form id="formRegister">
        <label for="name" class="label">Nombre:</label></br>
        <input type="text" id="name" class="inputs-register"></br>
        <label for="lastNames" class="label">Apellidos:</label></br>
        <input type="text" id="lastName" class="inputs-register"></br>
        <label for="brithday" class="label">Cumpleaños</label></br>
        <input type="text" id="brithday" placeholder="01-01-01" class="inputs-register"></br>
        <label for="email" class="label">Email:</label></br>
        <input type="email" id="email" class="inputs-register"></br>
        <label for="password" class="label">password:</label></br>
        <input type="password" id="password" class="inputs-register"></br>
        <label for="confirmPassword" class="label">Confirm password:</label></br>
        <input type="password" id="confirmPassword" class="inputs-register"></br>
        <input type="radio" id="acepto">
        <label for="acepto" class="label">He leído los términos y acepto.</label></br>
        <input type="submit" class="button">
    </form>
</div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('css-register');
  divElemt.innerHTML = viewRegister;

  const formRegister = divElemt.querySelector('#formRegister');
  formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('ingresa al button');
    const elementsRegister = formRegister.elements;
    const requi = /\S+@\S+\.\S+/;
    if (elementsRegister.password.value.length >= 6
        && elementsRegister.password.value === elementsRegister.confirmPassword.value) {
      if (requi.test(elementsRegister.email.value) === true) {
        correctRegister(elementsRegister.name.value,
          elementsRegister.lastName.value,
          elementsRegister.brithday.value,
          elementsRegister.email.value,
          elementsRegister.password.value,
          elementsRegister.confirmPassword.value);
      }
      // eslint-disable-next-line no-restricted-globals
      location.href = '#/';
    } else {
    // eslint-disable-next-line no-alert
      alert('Las contraseñas no son iguales');
    }
  });
  return divElemt;
};
