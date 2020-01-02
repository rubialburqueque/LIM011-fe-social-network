
export const showComentarios = (data) => {
  let viewContact = '';
  data.forEach((comentario) => {
    viewContact += `
    <div class="publicaciones">
      <!-- Avatar -->
      <figure class="comment-avatar"> <img src="aqui va una foto de avatar.jpg" alt=""/> </figure>
      <!-- Contenedor del Comentario -->
      <div class="comment-box">
      <section class="comment-head">
        <h6 class="comment-name by-author">${comentario.nombre}</h6>
        <span>hace 20 minutos</span>
        <p>eliminar</p>
        <i class="fa fa-reply"></i>
        <i class="fa fa-heart"></i>
      </section>
      <section class="comment-content">${comentario.texto}</section>
      <section class="comment-opinion">
        <p>Me gusta</p> <br>
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
