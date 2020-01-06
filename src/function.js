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
const registroPosts = JSON.parse(localStorage.getItem('posts'));
localStorage.getItem(registroPosts[2]);
sessionStorage.removeItem(registroPosts[2]);
registroPosts.push(localStorage.setItem('posts', JSON.stringify(registroPosts)));
// localStorage.setItem('posts', JSON.stringify(registroPosts));



/* const obtenerPost = registroPosts.filter(Posts => Posts.nombre === nombreUsuario);
if (obtenerPost.length >= 1){
    localStorage.setItem('postUsuario', obtenerPost[0].texto);
  }*/
  



