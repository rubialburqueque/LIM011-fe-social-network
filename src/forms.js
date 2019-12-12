import { correctRegiste } from './function.js';

const elementsRegister = formRegister.elements;
console.log(elementsRegister);
console.log(elementsRegister.name.value);

document.getElementById('formRegister').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('ingresa al button');
    correctRegiste(elementsRegister.name.value,
        elementsRegister.lastName.value,
        elementsRegister.email.value,
        elementsRegister.brithday.value,
        elementsRegister.password.value,
        elementsRegister.confirmPassword.value);
})