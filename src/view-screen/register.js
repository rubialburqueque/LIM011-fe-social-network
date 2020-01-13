import {
  correctRegister, getItemLocalStorage, AddObjRegisterToArray, saveItemLocalStorage } from '../function.js';


export default () => {
  const viewRegister = `
    <div class="container-register">
    <form id="formRegister">
        <label for="name" class="label" required >Nombre:</label></br>
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
        <input type="submit" class="button">
    </form>
</div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('css-register');
  divElemt.innerHTML = viewRegister;

  const formRegister = divElemt.querySelector('#formRegister');
  formRegister.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(elementsRegister);
    const elementsRegister = formRegister.elements;
    const requi = /\S+@\S+.S+/;
    // const requi = /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

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
      const registro = elementsRegister;
      const dataDeRegister = JSON.parse(getItemLocalStorage('registro'));
      const ArrayNew = AddObjRegisterToArray(registro, dataDeRegister);
      saveItemLocalStorage('registro', ArrayNew);
      // eslint-disable-next-line no-restricted-globals
      location.href = '#/';
    } else {
    // eslint-disable-next-line no-alert
      alert('Las contraseñas no son iguales');
    }
  });
  return divElemt;
};
