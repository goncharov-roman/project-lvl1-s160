export default (numbers, res, iterNum) => {
  const number1 = numbers[0];
  const number2 = numbers[2];
  if ((iterNum === 0 && Number(res) === number1 + number2) ||
    (iterNum === 1 && Number(res) === number1 - number2) ||
    (iterNum === 2 && Number(res) === number1 * number2)) {
    return 'yes';
  }
  if (iterNum === 0) {
    return number1 + number2;
  } else if (iterNum === 1) {
    return number1 - number2;
  }
  return number1 * number2;
};
