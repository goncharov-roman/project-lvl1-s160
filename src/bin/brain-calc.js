#!/usr/bin/env node
import { getUserName, gameCalcFunction } from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

const iter = (acc) => {
  if (acc === 3) {
    console.log(`Congratulations, ${userName}!`);
    return 0;
  }
  if (gameCalcFunction(userName, acc) === 0) {
    return iter(acc + 1);
  }
  return 1;
};

iter(0);
