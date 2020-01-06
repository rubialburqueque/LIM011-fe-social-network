
export const showComentarios = (data) => {
  let viewComments = '';
  data.forEach((comentario) => {
    const date = new Date(comentario.fecha);
    viewComments += `
    <div class="publicaciones">
      <!-- Avatar -->
      <figure class="comment-avatar"> <img src="./imagen/usuario.png" alt=""/> </figure>
      <!-- Contenedor del Comentario -->
      <div class="comment-box" "icons">
      <section class="comment-head">
        <h6 class="comment-name by-author">${comentario.nombre}</h6>
        <span>${date.toUTCString()}</span>
        <i class="icon-user-secret"></i>
        <i class="icon-pencil"></i>
        <i class="icon-trash-1"></i>
      </section>
      <section class="comment-content">${comentario.texto}</section>
      <section class="comment-opinion">
      <i class="icon-heart" id=meEncanta></i>
      <button type="button" id="comentarComentario" <i class="icon-chat"></i>comentar</button>
      
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
