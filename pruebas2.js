// const game = [
//   ["👽", 0, 0],
//   [0, "👽", "👽"],
//   [0, "👽", 0],
// ];

const game = [
  [
    { display: "👽", status: "" },
    { display: 0, status: "" },
    { display: 0, status: "" },
  ],
  [
    { display: 0, status: "" },
    { display: "👽", status: "" },
    { display: "👽", status: "" },
  ],
  [
    { display: 0, status: "" },
    { display: "👽", status: "" },
    { display: 0, status: "" },
  ],
];

setInterval(function gameOfLife() {
  console.clear();
  console.log(`
  ${game[0][0].display} ${game[0][1].display} ${game[0][2].display} \n
  ${game[1][0].display} ${game[1][1].display} ${game[1][2].display} \n
  ${game[2][0].display} ${game[2][1].display} ${game[2][2].display} \n`);

  function checkStatus(i, j) {
    if (i !== -1 && i !== game.length && j !== -1 && j !== game[i].length) {
      if (game[i][j].display === "👽") {
        return true;
      }
    }

    return false;
  }

  function checkAround(i, j) {
    let alive = "";

    if (checkStatus(i, j - 1)) {
      alive++;
    }

    if (checkStatus(i - 1, j - 1)) {
      alive++;
    }

    if (checkStatus(i - 1, j)) {
      alive++;
    }

    if (checkStatus(i - 1, j + 1)) {
      alive++;
    }

    if (checkStatus(i, j + 1)) {
      alive++;
    }

    if (checkStatus(i + 1, j + 1)) {
      alive++;
    }

    if (checkStatus(i + 1, j)) {
      alive++;
    }

    if (checkStatus(i + 1, j - 1)) {
      alive++;
    }

    return alive;
  }

  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (checkStatus(i, j)) {
        if (checkAround(i, j) < 2 || checkAround(i, j) > 3) {
          game[i][j].status = "dead";
        }
      }

      if (checkAround(i, j) === 3) {
        game[i][j].status = "alive";
      }
    }
  }

  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j].status === "alive") {
        game[i][j].display = "👽";
      }

      game[i][j].display = 0;
    }
  }
}, 1000);