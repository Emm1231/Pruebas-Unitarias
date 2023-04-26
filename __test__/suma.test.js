const sum = require('../utils/suma')


test("sumar 1+2 igual a 3", () => {
    expect(sum(1,2)).toBe(3)

});


test("sumar 0+0 igual a 0", () => {
    expect(sum(0,0)).toBe(0) 
});

test("sumar 18+45 igual a 63", () => {
        expect(sum(18,45)).toBe(63) 
    });        

        describe('calculator', () => {
            test.each`
              firstValue | secondValue | expectedResult    
              ${3}       | ${1}        | ${4}
              ${-4}      | ${1}        | ${-3}
            `('$firstValue + $secondValue should return $expectedResult', ({firstValue, secondValue, expectedResult}) => {
              expect(sum(firstValue, secondValue)).toBe(expectedResult);
            });
          });
