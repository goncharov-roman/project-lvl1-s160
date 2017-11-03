const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export default (numbers, res) => {
  const number1 = Number(numbers[0]);
  const number2 = Number(numbers[1]);
  if (Number(res) === getGcd(number1, number2)) {
    return 'yes';
  }

  return getGcd(number1, number2);
};
