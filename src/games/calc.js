#!/usr/bin/env node
import { gameFunction, getRandom } from '..';

const calcFunction = (ind) => {
  const str = [];
  let symbol = '';
  const num1 = getRandom(0, 20);
  const num2 = getRandom(0, 20);
  if (ind % 3 === 0) {
    symbol = '+';
    str[1] = num1 + num2;
  } else if (ind % 3 === 1) {
    symbol = '-';
    str[1] = num1 - num2;
  } else if (ind % 3 === 2) {
    symbol = '*';
    str[1] = num1 * num2;
  }
  str[0] = `${num1} ${symbol} ${num2}`;
  return str;
};

export default () => gameFunction('What is the result of the expression?\n', calcFunction);
