export default () => {
  const viewForo = `
  <section id="foro" ><p class="titulo">girl ASK</p>
    <div id = "addComent">
      <img src = "../imagen/foto.jpeg" class = "foto" /><p id = "nombre"></p>
      </br>
      <input id="comit" type="text" placeholder="¿Que quieres compartir?....">
      </br>
      <button type="button" id="share">compartir</button>
    </div>  
  </section>`;

  const divElemt = document.createElement('div');

  divElemt.classList.add('position');
  divElemt.innerHTML = viewForo;

  divElemt.querySelector('#nombre').innerHTML = localStorage.getItem('nombreUsuario');
  const btnCompartir = divElemt.querySelector('#share');
  btnCompartir.addEventListener('click', () => {
    let addCommentNew = [];
    const article = document.createElement('article');
    divElemt.querySelector('#addComent').appendChild(article);
    article.setAttribute('id','newComent');
    console.log(divElemt.querySelector('#comit').value);
    divElemt.querySelector('#newComent').innerHTML = divElemt.querySelector('#comit').value;
    addCommentNew += divElemt.querySelector('#newComent').innerHTML;
  });

  return divElemt;
};
