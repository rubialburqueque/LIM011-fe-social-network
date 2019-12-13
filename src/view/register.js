export default () => {
    const viewRegister = `
    <div class="container">
    <form action="" method="get" name="formRegister">
        <label for="name">Nombre:</label>
        <input type="text" name="name" id="name" value="naty">
        <label for="lastNames">Apellidos:</label>
        <input type="text" name="lastName" id="lastName" value="lino">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" value="naty@4393">
        <label for="brithday">Cumpleaños</label>
        <input type="text" name="brithday" id="brithday" value="545">
        <label for="password">password:</label>
        <input type="password" name="password" id="password" value="dbchdbsk">
        <label for="confirmPassword">Confirmar contraseña</label>
        <input type="password" name="confirmPassword" id="confirmPassword" value="hsdiucbd">
        <button type="checkbox" id="acepto"></button>
        <label for="acepto">He leído los términos y acepto.</label>
        <input type="submit">
    </form>
</div>`;

    const divElemt = document.createElement('div');
    divElemt.classList.add('position')
    divElemt.innerHTML = viewRegister;
    return divElemt;
};