import { IPlayer } from '../interface/IPlayer';

export function validateWinner(player: IPlayer, round: string[]) {
  if (
    (round[0] === round[1] && round[0] === round[2]) ||
    (round[0] === round[3] && round[0] === round[6]) ||
    (round[0] === round[4] && round[0] === round[8]) ||
    (round[1] === round[4] && round[1] === round[7]) ||
    (round[2] === round[4] && round[2] === round[6]) ||
    (round[2] === round[5] && round[2] === round[8]) ||
    (round[3] === round[4] && round[3] === round[5]) ||
    (round[6] === round[7] && round[6] === round[8])
  )
    return player;

  return false;
}
