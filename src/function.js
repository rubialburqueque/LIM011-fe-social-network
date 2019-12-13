const register = [];

export const correctRegister = (name, lastname, birthday, email, password, confirmPassword) => {
  if (name === '' || lastname === '' || birthday === '' || email === '' || password === '' || confirmPassword === '') {
    console.log('funciona funcion');
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
  console.log(register);
};
