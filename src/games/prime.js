import { gameFunction, getRandom } from '..';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  const iter = (ind) => {
    if (ind ** 2 > num) {
      return true;
    }
    if (num % ind !== 0) {
      return iter(ind + 1);
    }
    return false;
  };
  return iter(2);
};

const primeFunction = () => {
  const str = [];
  const num = getRandom(1, 30);
  str[0] = `${num}`;
  str[1] = isPrime(num) ? 'yes' : 'no';
  return str;
};

export default () => gameFunction('Is the number prime?', primeFunction);
