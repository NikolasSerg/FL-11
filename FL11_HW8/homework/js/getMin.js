function getMin(...arg) {
  let rez = arg[0];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] <= rez) {
      rez = arg[i];
    }
  }
  return rez;
}
console.log(getMin(2, 10, 6, 3, 18, 15, 8, 7, 4, 5));
