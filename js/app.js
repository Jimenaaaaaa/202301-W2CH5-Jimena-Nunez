import { checkStatus, checkAround } from "./functions.js";
import { game } from "./game-position.js";

setInterval(() => {
  console.clear();
  console.log(`
  ${game[0][0].display}  ${game[0][1].display}  ${game[0][2].display} \n
  ${game[1][0].display}  ${game[1][1].display}  ${game[1][2].display} \n
  ${game[2][0].display}  ${game[2][1].display}  ${game[2][2].display} \n`);

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
