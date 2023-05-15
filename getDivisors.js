const getDivisors = (num) => {
  const a = [];
  for (let i = num; i > 0; i--) {
    if (num % i == 0) {
      a.push(i);
    }
  }
  a.sort((first, second) => first - second);
  return a;
};
