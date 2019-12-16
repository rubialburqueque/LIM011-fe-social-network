export default () => {
  const viewContacto = 'ejemplo';

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewContacto;
  return divElemt;
};
