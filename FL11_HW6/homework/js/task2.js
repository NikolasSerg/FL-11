let a = parseFloat(prompt('enter length 1th side'));
let b = parseFloat(prompt('enter length 2th side'));
let c = parseFloat(prompt('enter length 3th side'));

if(isNaN(a) || isNaN(b) || isNaN(c)) {
console.log('Please enter true number');
} else if(a<b+c && a>b-c && b<a+c && b>a-c && c<b+a && c>b-a) {
    if(a === b && a === c) {
        console.log('Eequivalent triangle');
    } else if(a === b || a === c || b === c) {
    console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}