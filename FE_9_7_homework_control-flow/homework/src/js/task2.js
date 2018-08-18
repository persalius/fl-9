let play = confirm('Do you want to play a game?');
let userNumber; // число, которое ввел пользователь
let prize = 0; // выигрышь пользователя
let gameNumber = 0; // игра по счету...
let min = 0; // минимальное число
let max = 5; // максимальное число

let numbers = {one:1, two:2, three: 3, ten: 10, five: 5};

// призы за оперделенное место
let one = 10;
let two = 5;
let three = 2;
// ===========================

if (play === false) {
    alert('You did not become a millionaire, but can.');
} else {
    playWithMe();
}

function playWithMe() {
    gameNumber++;
    if (gameNumber >=2) {
        one *= 3;
        two *= 3;
        three *= 3;
    }
    
    let userTry = 0; // попытли пользователя
    let number = randomNumber(min * gameNumber, max * gameNumber);
    console.log(number);
    
    while (userNumber !== number && userTry < 3) {
        userTry++;
        
        let attemptAmount = 0; // попытка - сумма выиграша
        if (userTry === numbers.one) {
            attemptAmount = one;
        } else if (userTry === numbers.two) {
            attemptAmount = two;
        } else if (userTry === numbers.three) {
            attemptAmount = three;
        }
        
        let result1 = 'Enter a number from ' + min * gameNumber + ' to ' + max * gameNumber + '\n';
        let result2 = 'Attempts left: ' + (4 - userTry) + '\n';
        let result3 = 'Total prize: ' + prize + '$' + '\n';
        let result4 = 'Possible prize on current attempt: ' + attemptAmount + '$';
        
        
        userNumber = +prompt(result1 + result2 + result3 + result4, '');
    }
    
    if (userTry === numbers.one && userNumber === number) {
        prize += one;
    } else if (userTry === numbers.two && userNumber === number) {
        prize += two;
    } else if (userTry === numbers.three && userNumber === number) {
        prize += three;
    }
    
    let playAgain;
    let playContinue;
    if (userNumber !== number) {
        alert('Thank you for a game. Your prize is: ' + prize + '$');
        playAgain = confirm('Are you wants to play again?', '');
        
        if (playAgain === true) {
            gameNumber = 0;
            prize = 0;
            min = 0;
            max = numbers.five;
            one = numbers.ten;
            two = numbers.five;
            three = 2;
            playWithMe();
        }
    } else {
        playContinue = confirm('Congratulation! Your prize is: ' + prize + '$' + '. Do you want to continue?');
        
        if (playContinue === true) {
            playWithMe();
        } else {
            alert('Thank you for a game. Your prize is: ' + prize + '$');
            playAgain = confirm('Are you wants to play again?', '');
            
            if (playAgain === true) {
                gameNumber = 0;
                prize = 0;
                min = 0;
                max = numbers.five;
                one = numbers.ten;
                two = numbers.five;
                three = 2;
                playWithMe();
            }
        }
    }
}

// функция для получения рандомного значения
function randomNumber(min, max) {
    let result = Math.round(Math.random() * (max - min) + min);
    return result;
}











