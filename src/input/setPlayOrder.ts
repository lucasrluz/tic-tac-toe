import inquirer from 'inquirer';

export async function setPlayOrder() {
  return await inquirer.prompt([
    {
      type: 'list',
      name: 'firstPlayer',
      message: 'Qual jogador vai começar?',
      choices: ['x', 'o'],
    },
  ]);
}
