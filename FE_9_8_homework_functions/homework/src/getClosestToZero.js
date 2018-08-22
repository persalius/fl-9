function getClosestToZero(...arg) {
    let result = arg[0];
    let min = Math.abs(arg[0]);
    
    for (let i = 0; i < arg.length; i++) {
        if (Math.abs(arg[i]) < min) {
            result = arg[i];
            min = Math.abs(arg[i]);
        }
    }
    
    return result;
}

let numbers = {one: 9, two: 5, three: -4, four: -9};

getClosestToZero(numbers.one, numbers.two, numbers.three, numbers.four);