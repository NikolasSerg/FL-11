function isInteger(a) {
    return a % parseInt(a) === 0;
}
console.log(isInteger(2.5));
console.log(isInteger(3));
