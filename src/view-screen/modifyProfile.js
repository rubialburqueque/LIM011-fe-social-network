export default () => {
  const viewModifyProfile = `
    <div class="container-register">
    <form id="formRegister">
        <label for="name" class="label">Nombre:</label></br>
        <input type="text" id="name" class="inputs-register"></br>
        <label for="lastNames" class="label">Apellidos:</label></br>
        <input type="text" id="lastName" class="inputs-register"></br>
        <label for="brithday" class="label">Cumpleaños</label></br>
        <input type="text" id="brithday" placeholder="01-01-01" class="inputs-register"></br>
        <label for="email" class="label">Email:</label></br>
        <input type="email" id="email" class="inputs-register"></br>
        <label for="password" class="label">password:</label></br>
        <input type="password" id="password" class="inputs-register"></br>
        <label for="confirmPassword" class="label">Confirm password:</label></br>
        <input type="password" id="confirmPassword" class="inputs-register"></br>
        <input type="submit" class="button" value="modificar">
    </form>
</div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('css-ModifyProfile');
  divElemt.innerHTML = viewModifyProfile;
  return divElemt;
};
