export default () => {
  const viewForo = 'aqui va un div con la información';

  const divElemt = document.createElement('div');
  divElemt.classList.add('position');
  divElemt.innerHTML = viewForo;
  return divElemt;
};
