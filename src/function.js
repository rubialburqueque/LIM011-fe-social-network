export const correctName = (name, event) => {
    if (name === '') {
        console.log('funciona funcion');
        debugger
        alert('Por favor completar campo NOMBRE');
        event.preventDefault();
    }
}