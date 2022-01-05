import inquirer from 'inquirer';
import { IPlayer } from '../interface/player-interface';
import { validateMove } from '../service/validate-move';
import { validateInput } from '../service/validateInput';

export async function setPosition(round: string[], player: IPlayer) {
  const { position } = await inquirer.prompt([
    {
      type: 'input',
      name: 'position',
      message: `Em qual posição o jogador (${player.symbol}) quer jogar?\n:`,
      validate: validateInput,
    },
  ]);

  return validateMove(round, position);
}
