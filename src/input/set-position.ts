import { IPlayer } from "../interface/player-interface";
import { question } from "../interface/readline";
import { validateMove } from "../service/validate-move";

export async function setPosition(round: string[], player: IPlayer) {
  const position = Number(await question(`Em qual posição o jogador ${player.id}(${player.symbol}) quer jogar?\n:`));

  return validateMove(round, position); 
}