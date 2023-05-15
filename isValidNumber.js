const isValidNumber = (num) => {
  const parnum = parseInt(num);
  if (!isFinite(parnum) || isNaN(parnum)) return false;

  //parseInt는 3.5는 3으로 반환
  //parseInt는 정수를 반환하므로 type비교까지는 필요없는듯.
  if (parnum != num) return false;
  if (parnum >= 1 && parnum <= 9) return true;

  return false;
};
//console.log(isFinite(Infinity));
//console.log(isNaN(NaN));
//console.log(parseInt("abc"));
console.log(isValidNumber(9));
console.log(isValidNumber("4"));
console.log(isValidNumber("abc"));
console.log(isValidNumber(-5));
console.log(isValidNumber(3.5));
console.log(isValidNumber(3 / 0));
