const palindromo = require('../utils/palindromo.js')

test ('palindromo de fran', () => {
  const result = palindromo('fran')
    expect(result).toBe('narf')
})


test  ('palindromo de amor', () => {
  const result = palindromo('amor')
  expect(result).toBe('roma')


});

test  ('palindromo de ropa', () => {
  const result = palindromo('ropa')
  expect(result).toBe('apor')


});

test('palindromo de jamon', () => {
  const result = palindromo('jamon')
  expect(result).toBe('nomaj')
});

describe('Funcion palindromo', () => {
  test.each`
    palabra   | resultado
    ${'fran'} | ${'narf'}
    ${'amor'} | ${'roma'}
    ${'ropa'} | ${'apor'}
    ${'jamon'} | ${'nomaj'}
  `('Deberia invertir la palabra "$palabra" correctamente', ({palabra, resultado}) => {
    const result = palindromo(palabra)
    expect(result).toBe(resultado)
  })
})
