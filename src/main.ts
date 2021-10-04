import { question } from "./interface/readline";
import { renderGameBoard } from "./game/render-game-board";
import { setFirstPlayer } from "./input/set-first-player";
import { validateWinner } from "./service/validate-winner";
import { setPosition } from "./input/set-position";
import { IPlayer } from "./interface/player-interface";

async function main() {
  const players = await setFirstPlayer();

  let round = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

  let player: IPlayer;
  let i = true;
  while (true) {
    renderGameBoard(round);

    player = i ? players[0] : players[1];

    const position = await setPosition(round, player);

    i = !i;
  }
}
main();