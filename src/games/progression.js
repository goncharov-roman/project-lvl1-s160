import { gameFunction, getRandom } from '..';

const progFunction = () => {
  const str = [];
  str[0] = '';
  const progression = [];
  const first = getRandom(0, 100);
  progression[0] = first;
  const step = getRandom(1, 10);
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + step;
  }
  const emptyInd = getRandom(1, 8);
  str[1] = progression[emptyInd];
  progression[emptyInd] = '..';
  for (let i = 0; i < 10; i += 1) {
    str[0] = str[0].length === 0 ? `${progression[i]}` : `${str[0]} ${progression[i]}`;
  }
  return str;
};

export default () => gameFunction('What number is missing in this progression?', progFunction);
