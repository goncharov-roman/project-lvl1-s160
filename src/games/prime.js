#!/usr/bin/env node
import { gameFunction, getRandom } from '..';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeFunction = () => {
  const str = [];
  const num = getRandom(1, 30);
  str[0] = `${num}`;
  str[1] = isPrime(num) ? 'yes' : 'no';
  return str;
};

export default () => gameFunction('Is the number prime?\n', primeFunction);
