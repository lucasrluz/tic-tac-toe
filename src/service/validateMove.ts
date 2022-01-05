export function validateMove(round: string[], position: number) {
  if (round[position - 1] === 'x' || round[position - 1] === 'o') return false;

  return position;
}
