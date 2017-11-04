import { gameFunction, getRandom } from '..';

const calcFunction = () => {
  const round = 3;
  const str = [];
  let symbol = '';
  for (let i = 0; i < round; i += 1) {
    str[i] = [];
    const num1 = getRandom(0, 20);
    const num2 = getRandom(0, 20);
    if (i === 0) {
      symbol = '+';
      str[i][1] = num1 + num2;
    } else if (i === 1) {
      symbol = '-';
      str[i][1] = num1 - num2;
    } else {
      symbol = '*';
      str[i][1] = num1 * num2;
    }
    str[i][0] = `${num1} ${symbol} ${num2}`;
  }
  gameFunction('What is the result of the expression?\n', str);
};

export default calcFunction;
