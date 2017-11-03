import readlineSync from 'readline-sync';

const questionFunction = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameFunction = (task, func) => {
  const userName = questionFunction(task);

  const iter = (acc) => {
    if (acc === 3) {
      console.log(`Congratulations, ${userName}!`);
      return 0;
    }
    if (func(userName, acc) === 0) {
      return iter(acc + 1);
    }
    return 1;
  };

  iter(0);
};

export default questionFunction;
