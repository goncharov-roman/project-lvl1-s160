import readlineSync from 'readline-sync';
import { getRandom } from '.';

export default (name, iterNum) => {
  const number1 = getRandom(0, 21);
  const number2 = getRandom(0, 21);
  if (iterNum === 0) {
    console.log(`Question: ${number1} + ${number2}`);
  } else if (iterNum === 1) {
    console.log(`Question: ${number1} - ${number2}`);
  } else if (iterNum === 2) {
    console.log(`Question: ${number1} * ${number2}`);
  }
  const res = readlineSync.question('Your answer: ');
  if ((iterNum === 0 && Number(res) === number1 + number2) ||
    (iterNum === 1 && Number(res) === number1 - number2) ||
    (iterNum === 2 && Number(res) === number1 * number2)) {
    console.log('Correct!');
    return 0;
  }

  console.log(`${res} is wrong answer`);
  if (iterNum === 0) {
    console.log(`The right one is ${number1 + number2}`);
  } else if (iterNum === 1) {
    console.log(`The right one is ${number1 - number2}`);
  } else if (iterNum === 2) {
    console.log(`The right one is ${number1 * number2}`);
  }
  console.log(`Let's try again, ${name}`);
  return 1;
};
