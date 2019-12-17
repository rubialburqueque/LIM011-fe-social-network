let registers = [];
let i = 0;

export const correctRegister = (name, lastname, birthday, email, password, confirmPassword) => {
  if (name === '' || lastname === '' || birthday === '' || email === '' || password === '' || confirmPassword === '') {
    // eslint-disable-next-line no-alert
    alert('Por favor completar campo');
  } else {
    // eslint-disable-next-line no-console
    console.log('register');
    registers = JSON.parse(localStorage.getItem('registro'));
    if (registers === null) {
      registers = [];
    }
    registers.push({
      nombre: name,
      apellido: lastname,
      id: i += 1,
      cumpleaños: birthday,
      correo: email,
      contraseña: password,
      confirmarContraseña: confirmPassword,
    });
    // eslint-disable-next-line no-console
    console.log(registers);

    localStorage.setItem('registro', JSON.stringify(registers));
  }
  /* console.log(register); */
};
