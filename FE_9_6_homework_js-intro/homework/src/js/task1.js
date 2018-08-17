let inputSumm = +prompt('Price', '');
let inputDiscount = +prompt('Discount', '');

let summ = +inputSumm.toFixed(2);
let discount = +inputDiscount.toFixed(2);

let discountSumm = (summ * discount / 100).toFixed(2);
let priceWithDiscount = (summ - discountSumm).toFixed(2);

let result1 = 'Price without discount: ' + summ;
let result2 = 'Discount: ' + discount;
let result3 = 'Price with discount: ' + priceWithDiscount;
let result4 = 'Saved: ' + discountSumm;
let resultError = 'Invalid data';

if (inputSumm < 0 || inputDiscount < 0) {
    console.log(resultError);
} else {
    console.log(result1 + '\n' + result2 + '\n' + result3 + '\n' + result4);
}