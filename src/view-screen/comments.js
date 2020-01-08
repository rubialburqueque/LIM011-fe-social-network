import { guardarPost } from '../function.js';

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
      <button class="icon-heart iconClass" onClick="contadorMeEncanta()"></button>
      <button type="button" id="comentarComentario" <i class="icon-chat iconClass"></i>comentar</button>
      </section>
    </div>
  </div> `;

  const registroPosts = JSON.parse(localStorage.getItem('posts'));
  const deletePost = onlyComment.querySelector(`#delete-${index}`);
  deletePost.addEventListener('click', () => {
    const newPost = [];
    registroPosts.forEach((element, index1Post) => {
      console.log(element);
      console.log(index1Post);
      if (index1Post !== index) {
        newPost.push(element);
        console.log(newPost);
      }
    });
    localStorage.setItem('posts', JSON.stringify(newPost));
  });
  return onlyComment;
};

  // const likeButtons = document.divElemt.querySelector('#meEncanta');
  //   for (let i = 0; i < likeButtons.length; i++) {
  //     likeButtons[i].addEventListener("click", contadorMeEncanta())
  //     }

//   const i=0;
//   function contadorMeEncanta(){
//     while(i<=0){ i++;
//     const meEncanta=divElemt.querySelector('#meEncanta');
//     meEncanta.value= 'Presiona aqui('+i+')';
//     }
//   console.log(contadorMeEncanta)
//   return viewComments;
// };
  
//   const registroPosts = JSON.parse(localStorage.getItem('posts'));
//   const deletePost = onlyComment.querySelector(`#delete-${index}`);
//   deletePost.addEventListener('click', () => {
//     registroPosts.forEach((element, index1Post) => {
//       console.log(element);
//       console.log(index1Post);
//       const newPost = [];
//       if (index1Post !== index) {
//         console.log(newPost);
//       }
//       });
//     console.log(index)
//     // sessionStorage.removeItem(deletePost);

return onlyComment;
};   
