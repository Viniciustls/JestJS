import {sum} from '../functions/index';
import { expect, describe, it } from '@jest/globals';

describe ('sum', () => {
  it ('A soma de 1 + 2 deve ser igual a 3', () => {
    expect (sum (1, 2)).toBe (3);
  });
  it('A soma de 5 + 2 deve ser igual a 7 ', () => {
    expect(sum(5, 2)).toEqual(7);
  })
});

