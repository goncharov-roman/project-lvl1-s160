import { gameFunction, getRandom } from '..';

const calcFunction = () => {
  const str = [];
  let symbol = '';
  const num1 = getRandom(0, 21);
  const num2 = getRandom(0, 21);
  const arithmetic = getRandom(0, 3);
  if (arithmetic === 0) {
    symbol = '+';
    str[1] = num1 + num2;
  } else if (arithmetic === 1) {
    symbol = '-';
    str[1] = num1 - num2;
  } else if (arithmetic === 2) {
    symbol = '*';
    str[1] = num1 * num2;
  }
  str[0] = `${num1} ${symbol} ${num2}`;
  return str;
};

export default () => gameFunction('What is the result of the expression?', calcFunction);
