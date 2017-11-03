import readlineSync from 'readline-sync';
import { getRandom } from '.';

export default (name) => {
  const number = getRandom(0, 100);
  console.log(`Question: ${number}`);
  const res = readlineSync.question('Your answer: ');
  if ((number % 2 === 0 && res === 'yes') ||
    (number % 2 === 1 && res === 'no')) {
    console.log('Correct!');
    return 0;
  }

  console.log(`'${res}' is wrong answer ;(`);
  if (res === 'yes' || res === 'no') {
    console.log(`Correct answer was '${res === 'yes' ? 'no' : 'yes'}'`);
  }
  console.log(`Let's try again, ${name}!`);
  return 1;
};
