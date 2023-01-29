import { round } from './functions.js';

const game = [
  [
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
  ],
  [
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
  ],
  [
    { display: '-', status: 'dead' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '👽', status: 'alive' },
    { display: '-', status: 'dead' },
  ],
];

setInterval(() => {
  console.clear();
  console.log(`
  ${game[0][0].display}  ${game[0][1].display}  ${game[0][2].display}  ${game[0][3].display}  ${game[0][4].display} \n
  ${game[1][0].display}  ${game[1][1].display}  ${game[1][2].display}  ${game[1][3].display}  ${game[1][4].display} \n
  ${game[2][0].display}  ${game[2][1].display}  ${game[2][2].display}  ${game[2][3].display}  ${game[2][4].display} \n
  ${game[3][0].display}  ${game[3][1].display}  ${game[3][2].display}  ${game[3][3].display}  ${game[3][4].display} \n
  ${game[4][0].display}  ${game[4][1].display}  ${game[4][2].display}  ${game[4][3].display}  ${game[4][4].display} \n`);

  round(game);
}, 1000);
