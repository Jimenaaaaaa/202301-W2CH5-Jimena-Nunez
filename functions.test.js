import { checkStatus, checkAround, round } from "./functions";

const game = [
  [
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
    { display: 0, status: "dead" },
  ],
  [
    { display: 0, status: "dead" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
  ],
  [
    { display: 0, status: "dead" },
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
  ],
];

describe("Given checkStatus", () => {
  describe("When we have three parameters", () => {
    test("given 0 and 0 and an array as aguments, returns true", () => {
      const i = 0;
      const j = 0;
      const expected = true;
      const r = checkStatus(i, j, game);
      expect(r).toBe(expected);
    });

    test("given 0 and 2 and an array as aguments, returns true", () => {
      const i = 0;
      const j = 2;
      const expected = false;
      const r = checkStatus(i, j, game);
      expect(r).toBe(expected);
    });
  });
});

describe("Given checkAround", () => {
  describe("When we have two parameters", () => {
    test("given 0 and 0 and an array as aguments, returns true", () => {
      const i = 0;
      const j = 0;
      const expected = 1;
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

// describe("Given 'round'", () => {
//   describe("When we have an array as a parameter", () => {
//     test("The first round should be", () => {
//       const i = 0;
//       const j = 0;
//       const expected = 1;
//       const r = round(game);
//       expect(r).toBe(expected);
//     });

//     test("given 0 and 2 and an array as aguments, returns true", () => {
//       const i = -1;
//       const j = -1;
//       const expected = false;
//       const r = checkStatus(i, j, game);
//       expect(r).toBe(expected);
//     });
//   });
// });
