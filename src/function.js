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


// /* promesas para obtener o guardar datos en localStorage */

export const guardarPost = (post) => {
  return new Promise (
    (resolve, reject) => {
      if (localStorage.getItem('posts') === null) {
        const objPost1 = {
          nombre: localStorage.getItem('nombreUsuario'),
          texto: post,
          fecha: new Date(),
        };
        localStorage.setItem('posts', JSON.stringify([objPost1]));
      } else {
        const dataPosts1 = JSON.parse(localStorage.getItem('posts'));
        const objPost = {
          nombre: localStorage.getItem('nombreUsuario'),
          texto: post,
          fecha: new Date(),
        };
        dataPosts1.push(objPost);
        localStorage.setItem('posts', JSON.stringify(dataPosts1));
      }
      resolve(JSON.parse(localStorage.getItem('posts')));
    }
  );
};


/* const obtenerDatos = obtener => {
  return new Promise ((resolve, reject) => {
    if (registro.find(obtener === JSON.parse(localStorage.getItem('posts')))) {
      resolve (registro)
    }
  });
}; */
