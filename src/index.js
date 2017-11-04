import readlineSync from 'readline-sync';

const questionFunction = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const questionAnswer = (args) => {
  console.log(`Question: ${args}`);
  const res = readlineSync.question('Your answer: ');
  return res;
};

const failOut = (wrongResult, trueResult, name) => {
  console.log(`'${wrongResult}' is wrong answer ;(`);
  console.log(`The right one is '${trueResult}'`);
  console.log(`Let's try again, ${name}`);
};

export const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameFunction = (task, func) => {
  const round = 3;
  const userName = questionFunction(task);
  const iter = (acc) => {
    if (acc === round) {
      console.log(`Congratulations, ${userName}!`);
      return 'win';
    }
    const dataForGame = func(acc);
    const answer = questionAnswer(dataForGame[0]);
    if (answer === String(dataForGame[1])) {
      console.log('Correct!');
      return iter(acc + 1);
    }
    failOut(answer, dataForGame[1], userName);
    return 'fail';
  };

  iter(0);
};

export default questionFunction;
