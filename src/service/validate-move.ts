export function validateMove(round: string[], position: number) {
  if (position < 1 || position > 9 || round[position - 1] !== ' ') return false;

  return position;
}
