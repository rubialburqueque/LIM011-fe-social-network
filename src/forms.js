import { correctRegiste } from './function.js';

const formRegister = document.getElementById('formRegister');
const elementsRegister = formRegister.elements;
// eslint-disable-next-line no-console
console.log(elementsRegister);
// eslint-disable-next-line no-console
console.log(elementsRegister.name.value);

formRegister.addEventListener('submit', (event) => {
  event.preventDefault();
  correctRegiste(elementsRegister.name.value,
    elementsRegister.lastName.value,
    elementsRegister.email.value,
    elementsRegister.brithday.value,
    elementsRegister.password.value,
    elementsRegister.confirmPassword.value);
});
