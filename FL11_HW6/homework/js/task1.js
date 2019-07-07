let dotAx = parseFloat(prompt('enter X coordinate for A'));
let dotAy = parseFloat(prompt('enter Y coordinate for A'));

let dotBx = parseFloat(prompt('enter X coordinate for B'));
let dotBy = parseFloat(prompt('enter Y coordinate for B'));

let dotCx = parseFloat(prompt('enter X coordinate for C'));
let dotCy = parseFloat(prompt('enter Y coordinate for C'));

let devider = 2;

if((dotBx - dotAx)/devider + dotAx === dotCx && (dotBy - dotAy)/devider + dotAy === dotCy){
    console.log(true);
} else {
    console.log(false);
}