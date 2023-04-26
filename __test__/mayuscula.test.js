const isUpperCase = require('../utils/mayuscula');

test('The string HELLO should return true', () => {
    const result = isUpperCase('HELLO');
    expect(result).toBe(true);
})

test("The string GOOD should return true", () => {
    const result = isUpperCase('GOOd');
    expect(result).toBe(false);
});

test("The string cloud should return true", () => {
  const result = isUpperCase('cloud');
  expect(result).toBe(false);
});

test("The string ORDENADOR should return true", () => {
  const result = isUpperCase('ORDeNADOR');
  expect(result).toBe(false);
});

describe('Funcion isUpperCase', () => {
  test.each`
    entrada                                | resultado
    ${'HOLA'}                              | ${true}
    ${'Hola'}                              | ${false}
    ${'UN TEXTO TODO EN MAYUSCULAS'}       | ${true}
    ${'UN TEXTO CON MAYUSCULAS Y minusculas'} | ${false}
    ${'PERRO'}                              | ${true}
    ${'CABALLo'}                             | ${false}
  `('Debería devolver $resultado para "$entrada"', ({entrada, resultado}) => {
    const result = isUpperCase(entrada)
    expect(result).toBe(resultado)
  })
})

