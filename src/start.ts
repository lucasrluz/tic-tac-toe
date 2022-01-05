import { renderGameBoard } from './render/renderGameBoard';
import { setPlayers } from './player/setPlayers';
import { validateWinner } from './service/validateWinner';
import { setPosition } from './input/setPosition';
import { IPlayer } from './interface/IPlayer';
import { round } from './provider/round';

async function start() {
  const players = await setPlayers();

  let playerTurn: IPlayer;

  let i = true;

  while (true) {
    renderGameBoard(round);

    playerTurn = i ? players[0] : players[1];

    const position = await setPosition(round, playerTurn);

    if (!position) continue;

    round[position - 1] = playerTurn.symbol;

    if (validateWinner(playerTurn, round)) break;

    i = !i;
  }
  renderGameBoard(round);
  console.log(`O jogador (${playerTurn.symbol}) ganhou!`);
}
start();
