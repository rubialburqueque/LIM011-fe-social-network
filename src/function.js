export const correctRegister = (name, lastname, birthday, email, password, confirmPassword) => {
  if (name === '' || lastname === '' || birthday === '' || email === '' || password === '' || confirmPassword === '') {
    // eslint-disable-next-line no-alert
    alert('Por favor completar todos los campos');
  } else {

    registers = JSON.parse(localStorage.getItem('registro'));
  }
};

export const AddObjRegisterToArray = (nameUser, lastnameUser, birthdayUser,
  emailUser, passwordUser, confirmPasswordUser, dataDeRegister) => {
  const registerObj = {
    nombre: nameUser,
    apellido: lastnameUser,
    cumpleaños: birthdayUser,
    correo: emailUser,
    contraseña: passwordUser,
    confirmarContraseña: confirmPasswordUser,
};

  if (dataDeRegister === null) {
const arrToRegister = [];
dataDeRegister.push(registerObj);
    return arrToRegister;
} 
dataDeRegister.push(registerObj);
  return dataDeRegister
};
// localStorage.setItem('registro', JSON.stringify(registers));


/* obtener o guardar datos en localStorage */

export const getItemLocalStorage = (nombreDeItem) => {
  const data = localStorage.getItem(nombreDeItem);
  return data;
};

export const saveItemLocalStorage = (nombreDeItem, dataParaGuardar) => {
  localStorage.setItem(nombreDeItem, JSON.stringify(dataParaGuardar));
};

export const agregaObjPostAlArr = (textoDelPost, dataDePosts, nombreDeUsuario) => {
  // eslint-disable-next-line no-console
  console.log('gfhgdh', dataDePosts);

  const objPost = {
    nombre: nombreDeUsuario,
    texto: textoDelPost,
    fecha: new Date(),
  };

  if (dataDePosts === null) {
    const arr = [];
    arr.push(objPost);
    return arr;
  }
  JSON.parse(dataDePosts.push(objPost));
  return dataDePosts;
};
