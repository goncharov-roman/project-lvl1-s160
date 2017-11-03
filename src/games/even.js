export default (numbers, res) => {
  const number = numbers[0];
  if ((number % 2 === 0 && res === 'yes') ||
    (number % 2 === 1 && res === 'no')) {
    return 'yes';
  }

  return number % 2 === 0 ? '\'yes\'' : '\'no\'';
};
