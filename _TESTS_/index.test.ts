import {sum, areaOfSquare} from '../functions/index';


describe ('A Soma de dois numeros', () => {
  it ('A soma de 1 + 2 deve ser igual a 3', () => {
    expect (sum (1, 2)).toBe(3);
  });
  it('A soma de 5 + 2 deve ser igual a 7 ', () => {
    expect(sum(5, 2)).toBe(7);
  })
})

describe('A área de um quadrado', () => {
  it('passed the value 4, should return 16', () => {
    expect(areaOfSquare(4)).toBe(16);
  })
  it('passed the value 5, should return 25', () => {
    expect(areaOfSquare(5)).toBe(25);
  })
})