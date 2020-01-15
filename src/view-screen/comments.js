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
        <span>${date.toString().slice(3, -40)}</span>
        <i id="dssd" class="icon-user-secret iconClass"></i>
        <button id="modify-${index}" class="icon-pencil iconClass" ></button>
        <button id="delete-${index}" class="icon-trash-1 iconClass"></button>
      </section>
      <section class="comment-content">${comentario.texto}</section>
      <section class="comment-opinion">
      <button class="icon-heart iconClass" id="reactionPostLove-${index}" onClick="reactionPostLove"></button>
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
  const modificarComment = JSON.parse(localStorage.getItem('post'));
  const modifyComment = onlyComment.querySelector(`#modify-${index}`);
  modifyComment.addEventListener('click', () => {
    const newPostModify = '';
    modificarComment.forEach((element, index1Post) => {
      if (index1Post === index) {
        registroPosts.texto.value}
        .update(index);

        newPostModify.push(element);
      }
    });
    localStorage.setItem('post', JSON.stringify(newPostModify));
  });


  const registerReactionCountLove = JSON.parse(localStorage.getItem('posts'));
  const reactionPostLove = onlyComment.querySelector(`#reactionPostLove-${index}`);
  reactionPostLove.addEventListener('click', () => {
    const reactionPostLove = '';
    registerReactionCountLove.forEach((post, index1love) => {
      if (index1love % 2 === 0) {
        // eslint-disable-next-line no-const-assign
        console.log(reactionPostLove = +1);
      } if (index1love % 2 !== 0) {
        // eslint-disable-next-line no-console
        console.log(reactionPostLove = -1);
      }
    });
    localStorage.setItem('posts', JSON.stringify(reactionPostLove));
    return reactionPostLove;
  });
};
