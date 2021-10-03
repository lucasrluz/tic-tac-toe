export function renderGameBoard(round: string[]) {
  return `
+ - + - + - +
| ${round[0]} | ${round[1]} | ${round[2]} |
+ - + - + - +
| ${round[3]} | ${round[4]} | ${round[5]} |
+ - + - + - +
| ${round[6]} | ${round[7]} | ${round[8]} |
+ - + - + - +
  `
}