import { gameFunction, getRandom } from '..';

const getMinMax = (num, flag) => {
  let min = Number(num[0]);
  let max = min;
  for (let i = 1; i < num.length; i += 1) {
    if (Number(num[i]) < min) {
      min = num[i];
    }
    if (Number(num[i]) > max) {
      max = num[i];
    }
  }
  const res = flag === 'max' ? String(max) : String(min);
  return res;
};

const getBalanced = (str) => {
  const num = Array.from(str);
  const newNum = [];
  const minInd = num.indexOf(getMinMax(str, 'min'));
  const maxInd = num.indexOf(getMinMax(str, 'max'));
  if ((Number(getMinMax(str, 'max')) - Number(getMinMax(str, 'min'))) <= 1) {
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

const gameBalanceFunction = () => {
  const round = 3;
  const str = [];
  for (let i = 0; i < round; i += 1) {
    str[i] = [];
    const num = getRandom(100, 9999);
    str[i][0] = `${num}`;
    str[i][1] = getBalanced(String(num));
  }

  gameFunction('Balance the given number."\n', str);
};

export default gameBalanceFunction;
