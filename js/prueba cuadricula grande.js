const game = [
  [
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
    { display: 0, status: "dead" },
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
  ],
  [
    { display: 0, status: "dead" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
  ],
  [
    { display: 0, status: "dead" },
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
  ],
  [
    { display: 0, status: "dead" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
  ],
  [
    { display: 0, status: "dead" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: "👽", status: "alive" },
    { display: 0, status: "dead" },
  ],
];

setInterval(() => {
  console.clear();
  console.log(`
  ${game[0][0].display}  ${game[0][1].display}  ${game[0][2].display} ${game[0][3].display} ${game[0][4].display} \n
  ${game[1][0].display}  ${game[1][1].display}  ${game[1][2].display} ${game[1][3].display} ${game[1][4].display} \n
  ${game[2][0].display}  ${game[2][1].display}  ${game[2][2].display} ${game[2][3].display} ${game[2][4].display} \n
  ${game[3][0].display}  ${game[3][1].display}  ${game[3][2].display} ${game[3][3].display} ${game[3][4].display} \n
  ${game[4][0].display}  ${game[4][1].display}  ${game[4][2].display} ${game[4][3].display} ${game[4][4].display} \n`);

  function checkStatus(i, j, game) {
    if (i !== -1 && i !== game.length && j !== -1 && j !== game[i].length) {
      if (game[i][j].display === "👽") {
        return true;
      }
    }

    return false;
  }

  function checkAround(i, j, game) {
    let alive = "";

    if (checkStatus(i, j - 1, game)) {
      alive++;
    }

    if (checkStatus(i - 1, j - 1, game)) {
      alive++;
    }

    if (checkStatus(i - 1, j, game)) {
      alive++;
    }

    if (checkStatus(i - 1, j + 1, game)) {
      alive++;
    }

    if (checkStatus(i, j + 1, game)) {
      alive++;
    }

    if (checkStatus(i + 1, j + 1, game)) {
      alive++;
    }

    if (checkStatus(i + 1, j, game)) {
      alive++;
    }

    if (checkStatus(i + 1, j - 1, game)) {
      alive++;
    }

    return alive;
  }

  const round = (game) => {
    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        if (checkStatus(i, j, game)) {
          if (checkAround(i, j, game) < 2 || checkAround(i, j, game) > 3) {
            game[i][j].status = "dead";
          }
        }

        if (checkAround(i, j, game) === 3) {
          game[i][j].status = "alive";
        }
      }
    }

    for (let i = 0; i < game.length; i++) {
      for (let j = 0; j < game[i].length; j++) {
        if (game[i][j].status === "alive") {
          game[i][j].display = "👽";
        } else {
          game[i][j].display = 0;
        }
      }
    }
  };

  round(game);
}, 1000);
