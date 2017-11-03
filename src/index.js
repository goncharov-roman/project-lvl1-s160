import readlineSync from 'readline-sync';

const questionFunction = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const questionAnswer = (nums, rand) => {
  const numOut = nums.slice(0, rand).join(' ');
  console.log(`Question: ${numOut}`);
  const res = readlineSync.question('Your answer: ');
  return res;
};

const failOut = (wrongResult, trueResult, name) => {
  console.log(`'${wrongResult}' is wrong answer ;(`);
  console.log(`The right one is ${trueResult}`);
  console.log(`Let's try again, ${name}`);
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const randomNums = (min, max, rand, acc) => {
  const nums = [];
  nums[0] = getRandom(min, max);
  nums[1] = getRandom(min, max);
  if (rand > 2) {
    nums[0] = getRandom(min, max);
    if (acc === 0) {
      nums[1] = '+';
    } else {
      nums[1] = acc === 1 ? '-' : '*';
    }
    nums[2] = getRandom(min, max);
  }
  return nums;
};

export const gameFunction = (task, func, min, max, rand) => {
  const userName = questionFunction(task);
  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${userName}!`);
      return 'win';
    }
    const numbers = randomNums(min, max, rand, acc);
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
