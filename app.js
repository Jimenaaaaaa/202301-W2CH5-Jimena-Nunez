const game = [
  ["👽", 0, 0],
  [0, "👽", "👽"],
  [0, "👽", 0],
];

// Let leftVert;
// let rightVert;

// let topHor;
// let botHor;

// function checkPosition(i, j) {

//   if (i === 0) {
//     // Horizontal
//     topHor = true;
//   }

//   if (i === game.length - 1) {
//     botHor = true;
//   }

//   if (j === 0) {
//     // Vertical
//     leftVert = true;
//   }

//   if (j === game[i].length - 1) {
//     rightVert = true;
//   }
// }
setInterval(function gameOfLife() {}, 1000);

function checkStatus(i, j) {
  if (game[i][j] === "👽") {
    return true;
  }

  return false;
}

function checkAround(i, j) {
  // 0,0

  const alive = "";

  // X va a ser el vertical
  if (checkStatus(game[i][j - 1])) {
    alien++;
  }

  if (checkStatus(game[i - 1][j - 1])) {
    alien++;
  }

  if (checkStatus(game[i - 1][j])) {
    alien++;
  }

  if (checkStatus(game[i - 1][j + 1])) {
    alien++;
  }

  if (checkStatus(game[i][j + 1])) {
    alien++;
  }

  if (checkStatus(game[i + 1][j + 1])) {
    alien++;
  }

  if (checkStatus(game[i + 1][j])) {
    alien++;
  }

  if (checkStatus(game[i + 1][j - 1])) {
    alien++;
  }

  return alive;
}

for (let i = 0; i < game.length; i++) {
  for (let j = 0; j < game[i].length; j++) {
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
