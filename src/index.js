import readlineSync from 'readline-sync';

const questionFunction = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const questionAnswer = (nums, rand) => {
  const numOut = nums.slice(0, rand).join(' ');
  console.log(`Question: ${numOut}`);
  const res = readlineSync.question('Your answer: ');
  return res;
};

export const failOut = (wrongResult, trueResult, name) => {
  console.log(`'${wrongResult}' is wrong answer ;(`);
  console.log(`The right one is ${trueResult}`);
  console.log(`Let's try again, ${name}`);
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameFunction = (task, func, min, max, rand) => {
  const userName = questionFunction(task);
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${userName}!`);
      return 'win';
    }
    const numbers = [];
    numbers[0] = getRandom(min, max);
    numbers[1] = getRandom(min, max);
    if (rand > 2) {
      numbers[0] = getRandom(min, max);
      if (acc === 0) {
        numbers[1] = '+';
      } else {
        numbers[1] = acc === 1 ? '-' : '*';
      }
      numbers[2] = getRandom(min, max);
    }
    const res = questionAnswer(numbers, rand);
    const result = func(numbers, res, acc);
    if (result === 'yes') {
      console.log('Correct!');
      return iter(acc + 1);
    }
    failOut(res, result, userName);
    return 'fail';
  };

  iter(0);
};

export default questionFunction;
