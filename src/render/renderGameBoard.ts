export function renderGameBoard(round: string[]) {
  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');
  console.log(
    `
+ - + - + - +
| ${round[0]} | ${round[1]} | ${round[2]} |
+ - + - + - +
| ${round[3]} | ${round[4]} | ${round[5]} |
+ - + - + - +
| ${round[6]} | ${round[7]} | ${round[8]} |
+ - + - + - +
  `,
  );
}
