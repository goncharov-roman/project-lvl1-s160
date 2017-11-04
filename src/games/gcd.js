#!/usr/bin/env node
import { gameFunction, getRandom } from '..';

const getGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
};

const gcdFunction = () => {
  const str = [];
  const num1 = getRandom(2, 30);
  const num2 = getRandom(2, 30);
  str[0] = `${num1} ${num2}`;
  str[1] = getGcd(num1, num2);
  return str;
};

export default () => gameFunction('Find the greater common divisor of given numbers\n', gcdFunction);
