import { IPlayer } from '../interface/IPlayer';
import { setPlayOrder } from '../input/setPlayOrder';

export async function setPlayers() {
  const players: IPlayer[] = [{ symbol: '' }, { symbol: '' }];

  process.stdout.write('\u001b[H\u001b[2J\u001b[3J');

  const { firstPlayer } = await setPlayOrder();

  players[0].symbol = firstPlayer;

  players[0].symbol === 'x'
    ? (players[1].symbol = 'o')
    : (players[1].symbol = 'x');

  return players;
}
