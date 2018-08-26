let arrayObj = {one: 2, two: 5, three: 8, four: 3};
let array = [arrayObj.one, arrayObj.two, arrayObj.three];

//1
function findType(arg) {
    return typeof arg;
}

findType('text');

//2
function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

forEach(array, function(el) {
    console.log(el)
});

//3
function map(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i]));
    }
    return result;
}

map(array, function(el) {
    return el + arrayObj.four;
});

//4
function filter(arr, fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

filter(array, function(el) {
    return el > arrayObj.four;
});

//5
function getAdultAppleLovers(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].age > 18 && data[i].favoriteFruit === 'apple') {
            result.push(data[i].name);
        }
    }
    return result;
}

let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'age': 39,
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'age': 38,
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'age': 2,
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'age': 17,
    'eyeColor': 'green',
    'name': 'Weiss',
    'favoriteFruit': 'banana'
  }
];

getAdultAppleLovers(data);


//6
function keys(obj) {
    let result = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)){
            result.push(i);
        }
    }
    
    return result;
}

keys({keyOne: 1, keyTwo: 2, keyThree: 3});

//7
function values(obj) {
    let result = [];
    for (let i in obj) {
        if (obj.hasOwnProperty(i)){
            result.push(obj[i]);
        }
    }
    
    return result;
}

values({keyOne: 1, keyTwo: 2, keyThree: 3});


//8
let sliceDistance = {zero: 0, three: 3};

function showFormattedDate(date) {
    let data = date;
    let day = data.getDate();
    let month = data.toLocaleString('en-us', { month: 'long' }).slice(sliceDistance.zero, sliceDistance.three);
    let year = data.getFullYear();
    return `It is ${day} of ${month}, ${year}`;
}

showFormattedDate(new Date('2018-08-27T01:10:00'));


















































