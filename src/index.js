import readlineSync from 'readline-sync';

const questionFunction = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gameFunction = (name) => {
  const number = getRandom(0, 100);
  console.log(`Question: ${number}`);
  const res = readlineSync.question('Your answer: ');
  if ((number % 2 === 0 && res === 'yes') ||
    (number % 2 === 1 && res === 'no')) {
    console.log('Correct!');
    return 0;
  }

  console.log(`'${res}' is wrong answer ;(`);
  if (res === 'yes' || res === 'no') {
    console.log(`Correct answer was '${res === 'yes' ? 'no' : 'yes'}'`);
  }
  console.log(`Let's try again, ${name}!`);
  return 1;
};

export default questionFunction;
