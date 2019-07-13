function getNumbers (arg) {
    let arr = [...arg];
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        !isNaN(arr[i]) ? filteredArr.push(arr[i]) : '';
    }
    return filteredArr;
}

console.log(getNumbers('df1df5dfsdf8sdfsfd4sdf8'));