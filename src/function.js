export const correctRegister = (name, lastname, birthday, email, password, confirmPassword) => {
  if (name === '' || lastname === '' || birthday === '' || email === '' || password === '' || confirmPassword === '') {
    // eslint-disable-next-line no-alert
    return false;
  }
  return true;
};
  //  else {
  //  saveItemLocalStorage{


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
    arrToRegister.push(registerObj);
    return arrToRegister;
  }
  // console.log(dataDeRegister);
  dataDeRegister.push(registerObj);
  return dataDeRegister;
};

/* obtener o guardar datos en localStorage */

export const getItemLocalStorage = (nombreDeItem) => {
  const data = localStorage.getItem(nombreDeItem);
  return data;
};

export const saveItemLocalStorage = (nombreDeItem, dataParaGuardar) => {
  localStorage.setItem(nombreDeItem, JSON.stringify(dataParaGuardar));
};

export const agregaObjPostAlArr = (textoDelPost, dataDePosts, nombreDeUsuario) => {
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
  dataDePosts.push(objPost);
  return dataDePosts;
};

export const suma = (a, b) => b + a;
