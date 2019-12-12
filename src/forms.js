import { correctName } from './function.js';

const nameRegister = document.getElementById('name')
    /* const elementsRegister = formRegister.elements; */

document.getElementById('formRegister').addEventListener('submit', (event) => {
    console.log('ingresa al button');
    correctName(nameRegister.value);
    event.preventDefault();
})