import { round } from './functions.js';

const game = [
  [
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
];

setInterval(() => {
  console.clear();
  console.log(`
  ${game[0][0].display}  ${game[0][1].display}  ${game[0][2].display}  ${game[0][3].display}  ${game[0][4].display}  ${game[0][5].display}  ${game[0][6].display}  ${game[0][7].display}  ${game[0][8].display}  ${game[0][9].display} \n
  ${game[1][0].display}  ${game[1][1].display}  ${game[1][2].display}  ${game[1][3].display}  ${game[1][4].display}  ${game[1][5].display}  ${game[1][6].display}  ${game[1][7].display}  ${game[1][8].display}  ${game[1][9].display} \n
  ${game[2][0].display}  ${game[2][1].display}  ${game[2][2].display}  ${game[2][3].display}  ${game[2][4].display}  ${game[2][5].display}  ${game[2][6].display}  ${game[2][7].display}  ${game[2][8].display}  ${game[2][9].display} \n
  ${game[3][0].display}  ${game[3][1].display}  ${game[3][2].display}  ${game[3][3].display}  ${game[3][4].display}  ${game[3][5].display}  ${game[3][6].display}  ${game[3][7].display}  ${game[3][8].display}  ${game[3][9].display} \n
  ${game[4][0].display}  ${game[4][1].display}  ${game[4][2].display}  ${game[4][3].display}  ${game[4][4].display}  ${game[4][5].display}  ${game[4][6].display}  ${game[4][7].display}  ${game[4][8].display}  ${game[4][9].display} \n
  ${game[5][0].display}  ${game[5][1].display}  ${game[5][2].display}  ${game[5][3].display}  ${game[5][4].display}  ${game[5][5].display}  ${game[5][6].display}  ${game[5][7].display}  ${game[5][8].display}  ${game[5][9].display} \n
  ${game[6][0].display}  ${game[6][1].display}  ${game[6][2].display}  ${game[6][3].display}  ${game[6][4].display}  ${game[6][5].display}  ${game[6][6].display}  ${game[6][7].display}  ${game[6][8].display}  ${game[6][9].display} \n
  ${game[7][0].display}  ${game[7][1].display}  ${game[7][2].display}  ${game[7][3].display}  ${game[7][4].display}  ${game[7][5].display}  ${game[7][6].display}  ${game[7][7].display}  ${game[7][8].display}  ${game[7][9].display} \n
  ${game[8][0].display}  ${game[8][1].display}  ${game[8][2].display}  ${game[8][3].display}  ${game[8][4].display}  ${game[8][5].display}  ${game[8][6].display}  ${game[8][7].display}  ${game[8][8].display}  ${game[8][9].display} \n
  ${game[9][0].display}  ${game[9][1].display}  ${game[9][2].display}  ${game[9][3].display}  ${game[9][4].display}  ${game[9][5].display}  ${game[9][6].display}  ${game[9][7].display}  ${game[9][8].display}  ${game[9][9].display} \n`);

  round(game);
}, 1000);
