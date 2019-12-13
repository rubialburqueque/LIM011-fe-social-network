export default () => {
  const viewPerfil = `
    <head>< codebook ></head>
    <img src="imagen/foto.jpeg" alt="">
    <p></> Developer Jr.</p>
    `;
  const divElem = document.createElement('div');
  divElem.classList.add('position');
  divElem.innerHTML = viewPerfil;
  return divElem;
};
