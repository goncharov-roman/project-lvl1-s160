#!/usr/bin/env node
import { getUserName, gameGcdFunction } from '..';

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

const iter = (acc) => {
  if (acc === 3) {
    console.log(`Congratulations, ${userName}!`);
    return 0;
  }
  if (gameGcdFunction(userName) === 0) {
    return iter(acc + 1);
  }
  return 1;
};

iter(0);
