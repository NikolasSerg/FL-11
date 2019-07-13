// Task 0 --------------------------
function getNumbers(arg) {
    let arr = [...arg];
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        !isNaN(arr[i]) ? filteredArr.push(arr[i]) : '';
    }
    return filteredArr;
}
console.log(getNumbers('df1df5dfsdf8sdfsfd4sdf8'));

// Task 1 --------------------------
function findTypes(...arg) {
    let types = {};
    for(let i = 0; i < arg.length; i++) {
        types[typeof arg[i]] = arg[i];
    }
    return types;
}
console.log(findTypes(1, 'dfdf', false));

// Task 2 --------------------------
function executeforEach() {
    let arr = [];
    for(let i = 0; i < arguments[0].length; i++) {
        arr.push(arguments[1](arguments[0][i]));
    }
    return arr;
}
executeforEach([1,2,3], function(el) { console.log(el) }); 

// Task 3 --------------------------
function mapArray(arr, fun) {
    return executeforEach(arr, fun);
}
console.log(mapArray([2, 5, 8], function(el) { return el + 3 })); 

// Task 4 --------------------------
function filterArray(arr, fun) {
    let arrBool = executeforEach(arr, fun);
    let newArr = [];
    for(let i = 0; i < arrBool.length; i++) {
        arrBool[i] === true ? newArr.push(arguments[0][i]) : '';
    }
    return newArr;
}
console.log(filterArray([2, 5, 8], function(el) { return el > 3 }));

// Task 5 --------------------------
function showFormattedDate(dates) {
    let arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des'];
let date = dates.getDate();
let mounth = dates.getMonth();
let year = dates.getFullYear();
return `Date: ${arrMonth[mounth]} ${date} ${year}`
} 
 console.log(showFormattedDate(new Date('2019-01-27T01:10:00'))); 

 // Task 6 --------------------------
 