import { renderGameBoard } from './render/render-game-board';
import { setPlayers } from './player/set-players';
import { validateWinner } from './service/validate-winner';
import { setPosition } from './input/set-position';
import { IPlayer } from './interface/player-interface';
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
