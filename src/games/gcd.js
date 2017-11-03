import readlineSync from 'readline-sync';
import { getRandom } from '.';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export default (name) => {
  const number1 = getRandom(1, 30);
  const number2 = getRandom(1, 30);
  console.log(`Question: ${number1} ${number2}`);
  const res = readlineSync.question('Your answer: ');
  if (Number(res) === getGcd(number1, number2)) {
    console.log('Correct!');
    return 0;
  }

  console.log(`'${res}' is wrong answer ;(`);
  console.log(`The right one is ${getGcd(number1, number2)}`);
  console.log(`Let's try again, ${name}`);
  return 1;
};
