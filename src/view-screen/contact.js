
export const showComentarios = (data) => {
  let viewContact = '';
  data.forEach((comentario) => {
    const date = new Date(comentario.fecha);
    viewContact += `
    <div class="publicaciones">
      <!-- Avatar -->
      <figure class="comment-avatar"> <img src="aqui va una foto de avatar.jpg" alt=""/> </figure>
      <!-- Contenedor del Comentario -->
      <div class="comment-box">
      <section class="comment-head">
        <h6 class="comment-name by-author">${comentario.nombre}</h6>
        <span>${date.toUTCString()}</span>
        <p>eliminar</p>
        <i class="fa fa-reply"></i>
        <i class="fa fa-heart"></i>
      </section>
      <section class="comment-content">${comentario.texto}</section>
      <section class="comment-opinion">
        <p>Me gusta</p>
        <p>Comentar</p>
        <i class="fa fa-reply"></i>
        <i class="fa fa-heart"></i>
      </section>
    </div>
  </div> `;
  });
  return viewContact;
};


/* <section id = "publicaciones" >
    <p>${comentario.nombre}</p>
    <p>${comentario.texto}</p>
    </section> */
