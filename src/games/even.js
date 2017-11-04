#!/usr/bin/env node
import { gameFunction, getRandom } from '..';

const evenFunction = () => {
  const str = [];
  const num = getRandom(1, 100);
  str[0] = `${num}`;
  str[1] = num % 2 === 0 ? 'yes' : 'no';
  return str;
};

export default () => gameFunction('Answer "yes" if number is even otherwise answer "no"\n', evenFunction);
