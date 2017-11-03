import { getRandom, questionAnswer, failOut } from '..';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export default (name) => {
  const number1 = getRandom(1, 30);
  const number2 = getRandom(1, 30);
  const res = questionAnswer(number1, number2);
  if (Number(res) === getGcd(number1, number2)) {
    console.log('Correct!');
    return 'yes';
  }

  failOut(res, getGcd(number1, number2), name);
  return 'no';
};
