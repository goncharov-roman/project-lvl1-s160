import readlineSync from 'readline-sync';

const questionFunction = () => {
  const actual = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + actual + '!');
};

export default questionFunction;
