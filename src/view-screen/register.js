import { correctRegister } from '../function.js';

export default () => {
  const viewRegister = `
    <div class="container">
    <form id="formRegister">
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name" >
        <label for="lastNames">Apellidos:</label>
        <input type="text" name="lastName" id="lastName">
        <label for="brithday">Fecha de Nacimiento</label>
        <input type="text" name="brithday" id="brithday" placeholder="01-01-01">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
        <label for="password">password:</label>
        <input type="password" name="password" id="password">
        <label for="confirmPassword">Confirmar contraseña</label>
        <input type="password" name="confirmPassword" id="confirmPassword">
        <input type="radio" id="acepto">
        <label for="acepto">He leído los términos y acepto.</label>
        <input type="submit">
    </form>
</div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewRegister;
  const formRegister = divElemt.querySelector('#formRegister');
  formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-console
    console.log('ingresa al button');
    const elementsRegister = formRegister.elements;
    const regex = /\S+@\S+\.\S+/;
    if (elementsRegister.password.value.length >= 6
      && elementsRegister.password.value === elementsRegister.confirmPassword.value) {
      if (regex.test(elementsRegister.email.value) === true) {
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
