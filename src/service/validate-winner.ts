import { IPlayer } from '../interface/player-interface';

export function validateWinner(player: IPlayer, round: string[]) {
  if (
    (round[0] === round[1] && round[0] === round[2] && round[0] !== ' ') ||
    (round[0] === round[3] && round[0] === round[6] && round[0] !== ' ') ||
    (round[0] === round[4] && round[0] === round[8] && round[0] !== ' ') ||
    (round[1] === round[4] && round[1] === round[7] && round[1] !== ' ') ||
    (round[2] === round[4] && round[2] === round[6] && round[2] !== ' ') ||
    (round[2] === round[5] && round[2] === round[8] && round[2] !== ' ') ||
    (round[3] === round[4] && round[3] === round[5] && round[3] !== ' ') ||
    (round[6] === round[7] && round[6] === round[8] && round[6] !== ' ')
  )
    return player;

  return false;
}
