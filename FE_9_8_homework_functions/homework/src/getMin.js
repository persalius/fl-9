function getMin(...arg) {
    let min = arg[0];
    for (let i = 1; i < arg.length; i++) {
        if (arg[i] < min) {
            min = arg[i];
        }
    }
    return min;
}

let numbers = {one: 5, two: 1, three: 9};

getMin(numbers.one, numbers.two, numbers.three);