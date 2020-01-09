import { correctRegister, guardarPost } from '../src/function.js';

describe('correctRegister', () => {
  it('debería ser una función', () => {
    expect(typeof correctRegister).toBe('function');
  });
  it('deberia de guardar la data del usuario', () => {
    expect(localStorage.getItem('registro')).toBe(undefined)
    correctRegister()
  })
});