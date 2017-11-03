import readlineSync from 'readline-sync';

const questionFunction = (task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

export const gameEvenFunction = (name) => {
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

export const gameCalcFunction = (name, iterNum) => {
  const number1 = getRandom(0, 21);
  const number2 = getRandom(0, 21);
  if (iterNum === 0) {
    console.log(`Question: ${number1} + ${number2}`);
  } else if (iterNum === 1) {
    console.log(`Question: ${number1} - ${number2}`);
  } else if (iterNum === 2) {
    console.log(`Question: ${number1} * ${number2}`);
  }
  const res = readlineSync.question('Your answer: ');
  if ((iterNum === 0 && Number(res) === number1 + number2) ||
    (iterNum === 1 && Number(res) === number1 - number2) ||
    (iterNum === 2 && Number(res) === number1 * number2)) {
    console.log('Correct!');
    return 0;
  }

  console.log(`${res} is wrong answer`);
  if (iterNum === 0) {
    console.log(`The right one is ${number1 + number2}`);
  } else if (iterNum === 1) {
    console.log(`The right one is ${number1 - number2}`);
  } else if (iterNum === 2) {
    console.log(`The right one is ${number1 * number2}`);
  }
  console.log(`Let's try again, ${name}`);
  return 1;
};

export const gameGcdFunction = (name) => {
  const number1 = getRandom(1, 30);
  const number2 = getRandom(1, 30);
  console.log(`Question: ${number1} ${number2}`);
  const res = readlineSync.question('Your answer: ');
  if (Number(res) === getGcd(number1, number2)) {
    console.log('Correct!');
    return 0;
  }

  console.log(`'${res}' is wrong answer ;(`);
  console.log(`The right one is ${getGcd(number1, number2)}`);
  console.log(`Let's try again, ${name}`);
  return 1;
};

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
