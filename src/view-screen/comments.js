export const elementoPost = (comentario, index) => {
  const onlyComment = document.createElement('div');
  onlyComment.classList.add('publicaciones');
  const date = new Date(comentario.fecha);
  onlyComment.innerHTML =
  `
      <!-- Avatar -->
      <figure class="comment-avatar"> <img src="./imagen/usuario.png" alt=""/> </figure>
      <!-- Contenedor del Comentario -->
      <div class="comment-box" "icons">
      <section class="comment-head">
        <h6 class="comment-name by-author">${comentario.nombre}</h6>
        <span>${date.toUTCString()}</span>
        <i id="dssd" class="icon-user-secret"></i>
        <i class="icon-pencil"></i>
        <button id="delete-${index}" class="icon-trash-1"></button>
      </section>
      <section class="comment-content">${comentario.texto}</section>
      <section class="comment-opinion">
      <i class="icon-heart" id=meEncanta></i>
      <button type="button" id="comentarComentario" <i class="icon-chat"></i>comentar</button>
      </section>
    </div>`;

  const registroPosts = JSON.parse(localStorage.getItem('posts'));
  const deletePost = onlyComment.querySelector('#delete');
  deletePost.addEventListener('click'() => {
    console.log('hola rubi');
    sessionStorage.removeItem(registroPosts);
  });
  return onlyComment;
};
