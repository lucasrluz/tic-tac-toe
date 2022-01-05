export async function validateInput(input: string) {
  const round = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const positionValidation = round.indexOf(input);

  if (positionValidation === -1) return 'Invalid input';

  return true;
}
