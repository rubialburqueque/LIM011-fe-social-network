import { correctRegiste } from './function.js';

const elementsRegister = formRegister.elements;
const regex = /\S+@\S+\.\S+/;
console.log(elementsRegister);
console.log(elementsRegister.name.value);

document.getElementById('formRegister').addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('ingresa al button');
    console.log(regex.test(elementsRegister.email.value));

    if (elementsRegister.password.value.length >= 6 && elementsRegister.password.value === elementsRegister.confirmPassword.value) {
        if (regex.test(elementsRegister.email.value) === true) {
            correctRegiste(elementsRegister.name.value,
                elementsRegister.lastName.value,
                elementsRegister.email.value,
                elementsRegister.brithday.value,
                elementsRegister.password.value,
                elementsRegister.confirmPassword.value);
        }
    } else {
        alert('Las contraseñas no son iguales')
    }
})