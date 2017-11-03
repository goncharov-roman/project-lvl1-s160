import readlineSync from 'readline-sync';

const questionFunction = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const questionAnswer = (...nums) => {
  const numOut = nums.join(' ');
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

export const gameFunction = (task, func) => {
  const userName = questionFunction(task);

  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${userName}!`);
      return 'win';
    }
    if (func(userName, acc) === 'yes') {
      return iter(acc + 1);
    }
    return 'fail';
  };

  iter(0);
};

export default questionFunction;
