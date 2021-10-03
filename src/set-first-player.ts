import { IPlayer } from './player-interface';
import { question } from './readline';

export async function setFirstPlayer() {

  let players: IPlayer[] = [
    { id: 'player1', symbol: '' },
    { id: 'player2', symbol: '' }
  ];

  while(true) {
    process.stdout.write('\u001b[H\u001b[2J\u001b[3J');

    players[0].symbol = String(await question('Qual jogador vai começar?\n[ x ]\n[ o ]\nSua escolha: ')).toLowerCase();

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