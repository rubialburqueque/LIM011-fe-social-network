const register = [];

/* -------------------------------------------------------------------------------------------
archivo register.js
--------------------------------------------------------------------------------------------*/
export const completeRegister = (name, lastname, birthday, email, password, confirmPassword) => {
    register.push({
        nombre: name,
        apellido: lastname,
        cumpleaños: birthday,
        correo: email,
        contraseña: password,
        confirmarContraseña: confirmPassword,
    });
    localStorage.setItem('resgistro', JSON.stringify(register));
}

export const validateRegister = (string) => {
    if (string === '') {
        return false;
    } else {
        continue;
    }
};