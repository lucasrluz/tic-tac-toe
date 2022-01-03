import { IPlayer } from '../interface/player-interface';
import { question } from '../interface/readline';

export async function setFirstPlayer() {
  const players: IPlayer[] = [
    { id: '1', symbol: '' },
    { id: '2', symbol: '' },
  ];

  while (true) {
    process.stdout.write('\u001b[H\u001b[2J\u001b[3J');

    players[0].symbol = String(
      await question('Qual jogador vai começar?\n[ x ]\n[ o ]\nSua escolha: '),
    ).toLowerCase();

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
