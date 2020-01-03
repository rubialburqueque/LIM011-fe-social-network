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
        <input type="submit" id="buttonModifyProfile" class="button" value="modificar">
    </form>
</div>`;

  const divElemt = document.createElement('div');
  divElemt.classList.add('css-ModifyProfile');
  divElemt.innerHTML = viewModifyProfile;

  if (localStorage.getItem('registro') != null) {
    const idUsuario = localStorage.getItem('idUsuario');
    console.log(idUsuario);


    //localStorage.setItem('idUsuario', registro[0].id);
      
      // const aName = JSON.parse(localStorage.getItem(registro.nombre))
      //       aLastName = JSON.parse(localStorage.getItem(registro.apellido)),
      //       aBirthday = JSON.parse(localStorage.getItem(registro.cumpleaños)),
      //       aEmail = JSON.parse(localStorage.getItem(registro.correo)),
      //       aPassword = JSON.parse(localStorage.getItem(registro.contraseña)),
      //       aConfirmPassword = JSON.parse(localStorage.getItem(registro.confirmarContraseña)),


    };

    //   const id = getUrlVars()[id],
    //   newName = aName[id],
    //   newLastName = aLastName[id],
    //   newBirthday = aBirthday[id],
    //   newEmail = aEmail[id],
    //   newPassword = aPassword[id],
    //   newConfirmPassword = aConfirmPassword[id],
    //   buttonModifyProfile = document.querySelector('#buttonModifyProfile');

    //   divElemt.querySelector('#name').value = newName;
    //   divElemt.querySelector('#lastName').value = newLastName;
    //   divElemt.querySelector('#birthday').value = newBirthday;
    //   divElemt.querySelector('#email').value = newEmail;
    //   divElemt.querySelector('#password').value = newPassword;
    //   divElemt.querySelector('#confirmPassword').value = newConfirmPassword;

    //   function getUrlVars() {
    //     const vars = {};
    //     const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, (m, key, value) => {
    //       vars[key] = value;
    //     });
    //     return vars;
    //   }
      return divElemt;
    };
