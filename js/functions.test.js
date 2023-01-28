import { checkStatus, checkAround, round } from "./functions";

const game = [
  [
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
  ],
  [
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
  ],
  [
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
  ],
];

describe("Given checkStatus", () => {
  describe("When we have three parameters", () => {
    test("given 0 and 0 and an array as arguments, returns true", () => {
      const i = 0;
      const j = 0;
      const expected = true;
      const r = checkStatus(i, j, game);
      expect(r).toBe(expected);
    });
  });
});

describe("Given checkAround", () => {
  describe("When we have two parameters", () => {
    test("given 0 and 0 and an array as aguments, returns true", () => {
      const i = 1;
      const j = 1;
      const expected = 8;
      const r = checkAround(i, j, game);
      expect(r).toBe(expected);
    });

    test("given 0 and 2 and an array as aguments, returns true", () => {
      const i = -1;
      const j = -1;
      const expected = false;
      const r = checkStatus(i, j, game);
      expect(r).toBe(expected);
    });
  });
});

describe("Given 'round'", () => {
  describe("When we have three parameters being 0, 1, game", () => {
    test("The status of game[1][2] should be", () => {
      round(game);
      const expected = "dead";
      const r = game[1][2].status;
      expect(r).toBe(expected);
    });

    test("given 0 and 2 and an array as aguments, returns true", () => {
      const i = -1;
      const j = -1;
      const expected = false;
      const r = checkStatus(i, j, game);
      expect(r).toBe(expected);
    });
  });
});
