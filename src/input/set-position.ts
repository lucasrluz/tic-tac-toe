import inquirer from 'inquirer';
import { IPlayer } from '../interface/player-interface';
import { validateMove } from '../service/validate-move';

export async function setPosition(round: string[], player: IPlayer) {
  const { position } = await inquirer.prompt([
    {
      type: 'list',
      name: 'position',
      message: `Em qual posição o jogador ${player.id}(${player.symbol}) quer jogar?\n:`,
      choices: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    },
  ]);

  return validateMove(round, position);
}
