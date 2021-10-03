import readline from 'readline';
import util from 'util';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

export const question = util.promisify(rl.question).bind(rl);
