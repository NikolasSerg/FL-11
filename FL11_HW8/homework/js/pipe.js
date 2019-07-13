function pipe(x, ...arg) {
  let num = x;

  for (let i = 0; i < arg.length; i++) {
      num = addOne(num);
  }
  return num;
}

  function addOne(x) {
    return x + 1;
  }

console.log(pipe(10, addOne, addOne, addOne))