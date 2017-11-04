import { gameFunction, getRandom } from '..';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const gcdFunction = () => {
  const round = 3;
  const str = [];
  for (let i = 0; i < round; i += 1) {
    str[i] = [];
    const num1 = getRandom(2, 30);
    const num2 = getRandom(2, 30);
    str[i][0] = `${num1} ${num2}`;
    str[i][1] = getGcd(num1, num2);
  }
  gameFunction('Find the greater common divisor of given numbers\n', str, round);
};

export default gcdFunction;
