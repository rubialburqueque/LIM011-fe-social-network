
export const showComentarios = (data) => {
  let viewContact = '';
  data.forEach((prueba) => {
    viewContact += `
    <section>
    <p>${prueba.nombre}</p>
    <p>${prueba.texto}</p>
    </section>`;
    viewContact = document.createElement('div');
    /* divElemt.querySelector('#commit-publicado').innerHTML = data[6].texto;
    divElemt.querySelector('#name-user').innerHTML = data[].nombre;
    console.log(data[0].texto); */
    return viewContact;
  });
};
