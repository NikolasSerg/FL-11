function reverseNumber(a) {
  let rez = "";
  let counter = 1; 
  if(a < 0) {
    rez = '-';
    a = -a;
  }
  while (a > 0 ? a / counter > 1 : a / counter < -1) {
    rez += parseInt(a / counter % 10)
    counter *= 10;
  }
  return parseInt(rez);
}
console.log(reverseNumber(-564));
