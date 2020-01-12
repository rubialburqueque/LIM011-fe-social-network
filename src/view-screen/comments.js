export const elementoPost = (comentario, index) => {
  const onlyComment = document.createElement('div');
  onlyComment.classList.add('publicaciones');
  const date = new Date(comentario.fecha);
  onlyComment.innerHTML = `
      <!-- Avatar -->
      <figure class="comment-avatar"> <img src="./imagen/usuario.png" alt=""/> </figure>
      <!-- Contenedor del Comentario -->
      <div class="comment-box">
      <section class="comment-head iconClass">
        <h6 class="comment-name by-author">${comentario.nombre}</h6>
        <span>${date.toString()}</span>
        <i id="dssd" class="icon-user-secret iconClass"></i>
        <button class="icon-pencil iconClass"></button>
        <button id="delete-${index}" class="icon-trash-1 iconClass"></button>
      </section>
      <section class="comment-content">${comentario.texto}</section>
      <section class="comment-opinion">
      <button class="icon-heart iconClass" id="contadorMeEncanta" onClick="contadorMeEncanta()"></button>
      <button type="button" id="comentarComentario" <i class="icon-chat iconClass"></i>comentar</button>
      </section>
    </div>
  </div> `;

  const registroPosts = JSON.parse(localStorage.getItem('posts'));
  const deletePost = onlyComment.querySelector(`#delete-${index}`);
  deletePost.addEventListener('click', () => {
    const newPost = [];
    registroPosts.forEach((element, index1Post) => {
      if (index1Post !== index) {
        newPost.push(element);
      }
    });
    localStorage.setItem('posts', JSON.stringify(newPost));

    const postsActuales = JSON.parse(localStorage.getItem('posts'));
    const divPadrePosts = document.querySelector('#commits');
    divPadrePosts.innerHTML = '';
    postsActuales.forEach((element, indice) => {
      const newNodoPost = elementoPost(element, indice);
      divPadrePosts.appendChild(newNodoPost);
    });
  });
  function contadorCorazon(element, index) {
    let contador = 0;
    divElemt.getElementById('contadorMeEncanta').onclick = function () {
      contador++;
      // eslint-disable-next-line no-alert
      alert(contadorCorazon);
    };
  };

  return onlyComment;
};

