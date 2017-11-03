import readlineSync from 'readline-sync';
import { getRandom } from '.';

const getMin = (num) => {
  let min = Number(num[0]);
  for (let i = 1; i < num.length; i += 1) {
    if (Number(num[i]) < min) {
      min = num[i];
    }
  }
  return String(min);
};

const getMax = (num) => {
  let max = Number(num[0]);
  for (let i = 1; i < num.length; i += 1) {
    if (Number(num[i]) > max) {
      max = num[i];
    }
  }
  return String(max);
};

const getBalanced = (str) => {
  const num = Array.from(str);
  const newNum = [];
  const minInd = num.indexOf(getMin(str));
  const maxInd = num.indexOf(getMax(str));
  if ((Number(getMax(str)) - Number(getMin(str))) <= 1) {
    return num.sort().join('');
  }
  for (let i = 0; i < num.length; i += 1) {
    if (i === minInd) {
      newNum[i] = String(Number(num[i]) + 1);
    } else if (i === maxInd) {
      newNum[i] = String(Number(num[i]) - 1);
    } else {
      newNum[i] = num[i];
    }
  }
  return getBalanced(newNum.join(''));
};

export default (name) => {
  const number = getRandom(100, 999);
  console.log(`Question: ${number}`);
  const res = readlineSync.question('Your answer: ');
  if (res === getBalanced(String(number))) {
    console.log('Correct!');
    return 0;
  }

  console.log(`'${res}' is wrong answer ;(`);
  console.log(`The right one is ${getBalanced(String(number))}`);
  console.log(`Let's try again, ${name}`);
  return 1;
};
