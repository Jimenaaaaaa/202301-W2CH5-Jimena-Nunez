const game = [
  ["👽", 0, 0],
  [0, "👽", "👽"],
  [0, "👽", 0],
];

setInterval(function gameOfLife() {
  console.clear();
  console.log(`
  ${game[0][0]} ${game[0][1]} ${game[0][2]} \n
  ${game[0][0]} ${game[0][1]} ${game[0][2]} \n
  ${game[0][0]} ${game[0][1]} ${game[0][2]} \n`);

  function checkStatus(i, j) {
    if (i !== -1 && j !== -1) {
      if (game[i][j] === "👽") {
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
      debugger;
      if (checkStatus(i, j)) {
        if (checkAround(i, j) < 2 || checkAround(i, j) > 3) {
          game[i][j] = 0;
        }
      }

      if (checkAround(i, j) === 3) {
        game[i][j] = "👽";
      }
    }
  }
}, 1000);
