const register = [];

export const correctRegiste = (name, lastname, birthday, email, password, confirmPassword) => {
  if (name === '' || lastname === '' || birthday === '' || email === '' || password === '' || confirmPassword === '') {
    // eslint-disable-next-line no-alert
    alert('Por favor completar campo NOMBRE');
  } else {
    register.push({
      nombre: name,
      apellido: lastname,
      cumpleaños: birthday,
      correo: email,
      contraseña: password,
      confirmarContraseña: confirmPassword,
    });
    localStorage.setItem('resgistro', JSON.stringify(register));
  }
  /* console.log(register); */
};
