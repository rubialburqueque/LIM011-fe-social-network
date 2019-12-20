
export const showComentarios = (data) => {
  let viewContact = '';
  data.forEach((prueba) => {
    viewContact += `
    <section>
    <p>${prueba.nombre}</p>
    <p>${prueba.texto}</p>
    </section>`;
  });
  return viewContact;
};
