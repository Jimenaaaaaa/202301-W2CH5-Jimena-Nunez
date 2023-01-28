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

console.log(`
  ${game[0][0].display}  ${game[0][1].display}  ${game[0][2].display} \n
  ${game[1][0].display}  ${game[1][1].display}  ${game[1][2].display} \n
  ${game[2][0].display}  ${game[2][1].display}  ${game[2][2].display} \n`);
