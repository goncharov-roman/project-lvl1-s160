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

export default (numbers, res) => {
  if (res === getBalanced(String(numbers[0]))) {
    return 'yes';
  }
  return getBalanced(String(numbers[0]));
};
