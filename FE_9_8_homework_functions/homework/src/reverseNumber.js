function reverseNumber(num) {
    let result = String(num).split('');
    let sign;
    if (result[0] === '-') {
        sign = '-';
        result.shift();
    }
    result.reverse();
    result = result.join('');
    if (sign === '-') {
        result = sign + result;
    }
    return +result;
}

let number = -456;

reverseNumber(number);