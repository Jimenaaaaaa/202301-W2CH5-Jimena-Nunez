// Const canvas = document.querySelector('canvas');
// const c = canvas.getContext('2d');
// console.log(c);

// Const game = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0]
// ];

const game = [
  [{ display: 'alive' }, { status: 'dead' }, { status: 'alive' }],
  [{ status: 'dead' }, { status: 'alive' }, { status: 'alive' }],
  [{ status: 'alive' }, { status: 'alive' }, { status: 'dead' }],
];

function checkStatus(i, j, game) {
  if (i !== -1 && i !== game.length && j !== -1 && j !== game[i].length) {
    if (game[i][j].status === 'alive') {
      return true;
    }
  }

  return false;
}

function checkAround(i, j, game) {
  let alive = '';

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

function change(i, j) {
  const row = document.querySelector(`.row[style='--i:${i}']`);
  if (row) {
    const square = row.querySelector(`.square[style='--j:${j}']`);
    if (square) {
      if (game[i][j].display === 'alive') {
        square.style.backgroundColor = 'black';
      } else {
        square.style.backgroundColor = 'white';
      }
    }
  }
}

function start() {
  console.log('started');
  setInterval(() => {
    console.clear();
    console.log(`
  ${game[0][0].display}  ${game[0][1].display}  ${game[0][2].display} \n
  ${game[1][0].display}  ${game[1][1].display}  ${game[1][2].display} \n
  ${game[2][0].display}  ${game[2][1].display}  ${game[2][2].display} \n`);
    const round = (game) => {
      for (let i = 0; i < game.length; i++) {
        for (let j = 0; j < game[i].length; j++) {
          change(i, j);
          let alive = checkAround(i, j, game);
          if (checkStatus(i, j, game)) {
            if (alive < 2 || alive > 3) {
              game[i][j].status = 'dead';
            }
          }

          if (alive === 3) {
            game[i][j].status = 'alive';
          }
        }
      }
      // for (let i = 0; i < game.length; i++) {
      //   for (let j = 0; j < game[i].length; j++) {
      //     change(i, j);
      //   }
      // }
    };

    round(game);
  }, 5000);
}

start();

// Game.forEach( row => {
//   row.forEach( unit => {
//   })
// });
