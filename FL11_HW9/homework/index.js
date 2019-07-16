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
console.log(
    executeforEach([1,2,3], function(el) { 
        console.log(el) 
    }) 
);

// Task 3 --------------------------
function mapArray(arr, fun) {
    return executeforEach(arr, fun);
}
console.log(
    mapArray([2, 5, 8], function(el) { 
        return el + 3; 
    }) 
);

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
let rezult = `Date: ${arrMonth[mounth]} ${date} ${year}`;
return rezult;
}
console.log(
    showFormattedDate(new Date('2019-01-27T01:10:00'))
); 

 // Task 6 --------------------------
 function canConvertToDate(dates) {
    let arrMonth = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
    let dateMatch = dates.match(/\d+-\d+-\d+/);
    let timeMatch = dates.match(/\d+:\d+:\d+/);
    let amountMonth = 12;
    let amountHour = 23;
    let amountMinAndSec = 59;
    let dateArr = dateMatch[0].split(/-/);
    let timeArr = timeMatch[0].split(/:/);

    
    let date = parseInt(dateArr['2']);
    let mounth = parseInt(dateArr[1]);
    let year = parseInt(dateArr[0]);
    let hour = parseInt(timeArr[0]);
    let minutes = parseInt(timeArr[1]);
    let seconds = parseInt(timeArr['2']);

    if( date > arrMonth[mounth - 1] || date <= 0 || 
        mounth > amountMonth || mounth <= 0 || 
        year <= 0 ||
        hour < 0 || hour > amountHour ||
        minutes < 0 || minutes > amountMinAndSec ||
        seconds < 0 || seconds > amountMinAndSec) {
            console.log(false);
        } else {
            console.log(true);
        }
}
canConvertToDate('2016-13-18T00:00:00');
canConvertToDate('2016-03-18T00:00:00')

// Task 7 --------------------------
 function daysBetween(a, b) {
    let dateA = a;
    let dateB = b;
    let accountDay = 86400000;
    let dateNow = Date.now();
    let dateDiffA = dateNow - dateA;
    let dateDiffB = dateNow - dateB;
    let rezult;
    if(arguments.length > 1) {
       rezult = (dateDiffA - dateDiffB)/accountDay;
    } else {
        rezult = dateDiffA/accountDay;
    }
    return rezult < 0 ? -rezult : rezult;
 }
 console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')));

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
    const dayOfYear = 365;
    let limitYearsOld = 18;

     for(let i = 0; i < arg.length; i++) {
        rezDate.push( Math.floor(daysBetween(new Date(arg[i][' birthday ']))/dayOfYear) );
    }
    rezult = filterArray(rezDate, function(el) {
         return el > limitYearsOld; 
        })
    return rezult.length;
 }
console.log( getAmountOfAdultPeople(data) );

 // Task 9 --------------------------
function keys (object) {
    let keylist = Object.keys(object);
    return keylist;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));


// Task 10 --------------------------
function values(object) {
    let keylist = [];
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            keylist.push( object[key] );
        }
    }
    return keylist;
}
console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));
