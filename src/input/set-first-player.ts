import { IPlayer } from '../interface/player-interface';
import inquirer from 'inquirer';

export async function setFirstPlayer() {
  const players: IPlayer[] = [
    { id: '1', symbol: '' },
    { id: '2', symbol: '' },
  ];

  while (true) {
    process.stdout.write('\u001b[H\u001b[2J\u001b[3J');

    const { firstPlayer } = await inquirer.prompt([
      {
        type: 'list',
        name: 'firstPlayer',
        message: 'Qual jogador vai começar?',
        choices: ['x', 'o'],
      },
    ]);

    players[0].symbol = firstPlayer;

    if (players[0].symbol === 'x') {
      players[1].symbol = 'o';
      break;
    }

    if (players[0].symbol === 'o') {
      players[1].symbol = 'x';
      break;
    }
  }

  return players;
}
