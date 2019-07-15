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
executeforEach([1,2,3], function(el) { 
    console.log(el) 
}); 

// Task 3 --------------------------
function mapArray(arr, fun) {
    return executeforEach(arr, fun);
}
console.log(mapArray([2, 5, 8], function(el) { 
    return el + 3; 
})); 

// Task 4 --------------------------
function filterArray(arr, fun) {
    let arrBool = executeforEach(arr, fun);
    let newArr = [];
    for(let i = 0; i < arrBool.length; i++) {
        arrBool[i] === true ? newArr.push(arguments[0][i]) : '';
    }
    return newArr;
}
console.log(filterArray([2, 5, 8], function(el) { 
    return el > 3 
}));

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
 function canConvertToDate(dates) {
    let arrMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dateMatch = dates.match(/\d+-\d+-\d+/);
    let timeMatch = dates.match(/\d+:\d+:\d+/);
    let dateArr = dateMatch[0].split(/-/);
    let timeArr = timeMatch[0].split(/:/);
    let date = parseInt(dateArr[2]);
    let mounth = parseInt(dateArr[1]);
    let yaer = parseInt(dateArr[0]);
    let hour = parseInt(timeArr[0]);
    let minutes = parseInt(timeArr[1]);
    let seconds = parseInt(timeArr[2]);
    if( date > arrMonth[mounth - 1] || date <= 0 || 
        mounth > 12 || mounth <= 0 || 
        yaer <= 0 ||
        hour < 0 || hour > 23 ||
        minutes < 0 || minutes > 59 ||
        seconds < 0 || seconds > 59) {
            console.log(false);
        } else {
            console.log(true);
        }
} 
 canConvertToDate('2016-13-18T00:00:00'); 
 canConvertToDate('2016-03-18T00:00:00'); 

// Task 7 --------------------------
 function daysBetween(a, b) {
    let dateA = a;
    let dateB = b;
    let dateNow = Date.now();
    let dateDiffA = dateNow - dateA;
    let dateDiffB = dateNow - dateB;
    let rezult;
    if(arguments.length === 2) {
       rezult = (dateDiffA - dateDiffB)/(1000*3600*24);
    } else {
        rezult = dateDiffA/(1000*3600*24);
    }
     
    return rezult < 0 ? -rezult : rezult;
 }
 console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));
// console.log(daysBetween(new Date('2019-07-07T00:00:00')));

 // Task 8 --------------------------
 let data = [
    {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
    },
    {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
    },
    {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
    },
    {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
    }
 ];
function getAmountOfAdultPeople(arg) {
    let rezult = null;
    let rezDate = [];
     for(let i = 0; i < arg.length; i++) {
        rezDate.push( Math.floor(daysBetween(new Date(arg[i][' birthday ']))/365) );
    }
    rezult = filterArray(rezDate, function(el) {
         return el > 18 
        })
    return rezult.length;
 }
console.log( getAmountOfAdultPeople(data) );

 // Task 9 --------------------------
function keys (object) {
    let keylist = Object.keys(object);
    console.log( keylist );
    return keylist;
}
keys({keyOne: 1, keyTwo: 2, keyThree: 3});

// Task 10 --------------------------
function values(object) {
    let keylist = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            keylist.push( object[key] );
        }
    }
    console.log(keylist);
    return keylist;
}
values({keyOne: 1, keyTwo: 2, keyThree: 3});