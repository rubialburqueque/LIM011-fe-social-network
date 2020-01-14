import { agregaObjPostAlArr, suma } from '../src/function.js';

const prueba = {
  nombre: 'nombreUsuario',
  texto: 'textoUsuaio',
  fecha: new Date(),
};

describe('agregaObjPostAlArr', () => {
  it('debería ser una función', () => {
    expect(typeof agregaObjPostAlArr).toBe('function');
  });
  it('deberia agregar un objeto y retorna un array', () => {
    expect(agregaObjPostAlArr(prueba.texto, null, prueba.nombre)).toHaveLength(1);
  });
});

/* describe('suma', () => {
  it('Yo espero que para 3 y 4 retorne 7', () => {
    expect(suma(3, 4)).toBe(7);
  });
  it('Yo espero  que para 0 y 2 retone 2', () => {
    expect(suma(0, 2)).toBe(2);
  });
});
 */