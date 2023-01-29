import { checkStatus, checkAround, round } from './functions';
import { game } from './game-position';

describe('Given checkStatus', () => {
  describe('When we have three parameters', () => {
    test('given 0 and 0 and an array as arguments, returns true', () => {
      const i = 0;
      const j = 0;
      const expected = true;
      const r = checkStatus(i, j, game);
      expect(r).toBe(expected);
    });
  });
});

describe('Given checkAround', () => {
  describe('When we have two parameters', () => {
    test('given 1 and 1 and an array as aguments, returns 3', () => {
      const i = 1;
      const j = 1;
      const expected = 3;
      const r = checkAround(i, j, game);
      expect(r).toBe(expected);
    });
  });
});

describe("Given 'round'", () => {
  describe('When we the parameter being "game"', () => {
    test('The status of game[0][0] should be ', () => {
      round(game);
      const expected = 'dead';
      const r = game[0][0].status;
      expect(r).toBe(expected);
    });
  });
});
