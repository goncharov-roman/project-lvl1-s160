import { gameFunction, getRandom } from '..';

const evenFunction = () => {
  const round = 3;
  const str = [];
  for (let i = 0; i < round; i += 1) {
    str[i] = [];
    const num = getRandom(1, 100);
    str[i][0] = `${num}`;
    str[i][1] = num % 2 === 0 ? 'yes' : 'no';
  }

  gameFunction('Answer "yes" if number is even otherwise answer "no"\n', str);
};

export default evenFunction;
