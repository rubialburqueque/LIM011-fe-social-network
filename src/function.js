let registers = [];

export const correctRegister = (name, lastname, birthday, email, password, confirmPassword) => {
  if (name === '' || lastname === '' || birthday === '' || email === '' || password === '' || confirmPassword === '') {
    // eslint-disable-next-line no-alert
    alert('Por favor completar campo NOMBRE');
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
      cumpleaños: birthday,
      correo: email,
      contraseña: password,
      confirmarContraseña: confirmPassword,
    });
    localStorage.setItem('registro', JSON.stringify(registers));
  }
  /* console.log(register); */
};
