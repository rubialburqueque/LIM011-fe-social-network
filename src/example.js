/* export const example = () => {
// aquí tu código
}; */


const inputCorreo = document.getElementById('email');
inputCorreo.addEventListener('keypress', () => {
  const verificar = document.getElementById('email').value;
  if (verificar === 'email') {
    return true;
  }
  (document.getElementById('txtemail').innerHTML = 'email incorecto');
  return verificar;
});
