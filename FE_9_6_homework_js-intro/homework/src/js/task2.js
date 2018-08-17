let side1 = +prompt('Введите длину первой стороны', '');
let side2 = +prompt('Введите длину второй стороны', '');
let angle = +prompt('Введите угол между ними', '');

let number = 180;
let radial = angle * (Math.PI / number);
let side3 = +Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2) - 2*side1*side2 * Math.cos(radial)).toFixed(2);

let square = Math.round(side1 * side2 * Math.sin(radial) / 2);
let perimeter = side1 + side2 + side3;

let result = 'c length: ' + side3 + '\n' + 'Triangle square: ' + square + '\n' + 'Triangle perimeter: ' + perimeter;
let resultError = 'Invalid data';

if (side1 <= 0 || side2 <= 0 || angle <= 0 ) {
    console.log(resultError);
} else {
    console.log(result);
}