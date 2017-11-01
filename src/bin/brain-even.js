#!/usr/bin/env node
import { getUserName, gameFunction } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no"\n');

const userName = getUserName();
console.log(`Hello, ${userName}!\n`);

const iter = (acc) => {
  if (acc === 3) {
    console.log(`Congratulations, ${userName}!`);
    return 0;
  }
  if (gameFunction(userName) === 0) {
    return iter(acc + 1);
  }
  return 1;
};

iter(0);
