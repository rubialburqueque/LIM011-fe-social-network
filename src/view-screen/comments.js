
export const showComentarios = (data) => {
  let viewComments = '';
  data.forEach((comentario) => {
    const date = new Date(comentario.fecha);
    viewComments += `
    <div class="publicaciones">
      <!-- Avatar -->
      <figure class="comment-avatar"> <img src="aqui va una foto de avatar.jpg" alt=""/> </figure>
      <!-- Contenedor del Comentario -->
      <div class="comment-box">
      <section class="comment-head">
        <h6 class="comment-name by-author">${comentario.nombre}</h6>
        <span>${date.toUTCString()}</span>
        <p>eliminar</p>
        <span class="icon-trash marginHome"></span>
        <i class="icon-heart"></i>
      </section>
      <section class="comment-content">${comentario.texto}</section>
      <section class="comment-opinion">
        <p>Me gusta</p>
        <p>Comentar</p>
        <span class="icon-thumbs-up marginHome"></span>
        <span class="icon-comment marginHome"></span>
      </section>
    </div>
  </div> `;
  });
  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewComments;
  return viewComments;
};


/* <section id = "publicaciones" >
    <p>${comentario.nombre}</p>
    <p>${comentario.texto}</p>
    </section> */
