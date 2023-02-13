// Task 1

let textJs = 'js';
textJs = textJs.toUpperCase();
console.log(textJs);

// Task 2

const searchStart = (arr, str) => {
    let newArr = [];
    arr.forEach((element) => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            newArr.push(element) 
        }
    });
    return newArr;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

// Task 3

function mathRounding() {
    let numberMath = 32.58884;
    numberMathFloor = Math.floor(numberMath);
    console.log(numberMathFloor);
    numberMathCeil = Math.ceil(numberMath);
    console.log(numberMathCeil);
    numberMathRound = Math.round(numberMath);
    console.log(numberMathRound);
}
mathRounding();

// Task 4

const arrSort = [52, 53, 49, 77, 21, 32];

function arrSortMaxMin() {
    let min = Math.min(...arrSort);
    console.log(min);
    let max = Math.max(...arrSort);
    console.log(max);
}
arrSortMaxMin();

// Task 5

function randomGenerator(min, max) {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNumber);
}
randomGenerator(1, 10);

// Task 6

const getRandomArrNumbers = (numb) => {
    const randomArrNumbers = new Array(Math.floor(numb / 2));
    for (let i = 0; i < randomArrNumbers.length; i++) {
        randomArrNumbers[i] = Math.floor(Math.random() * (numb + 1));
    }
    console.log(randomArrNumbers);
}
getRandomArrNumbers(9);

// Task 7

const arrReturn = (first, second) =>
    Math.round(Math.random() * (first - second) + second);
console.log(arrReturn(3, 9));

// Task 8 

let currentDate = new Date();
console.log(currentDate);


// Task 9


const today = new Date();

console.log(`Сегодня - ${today}`);

today.setDate(today.getDate() + 73);

console.log(`Через 73 дня - ${today}`);

// Task 10

const myDate = new Date();
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const dateFull = (date) => {
    const hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    const dateRus = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()];

    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) {
        second = "0" + second;
    }

    const result = (`Дата: ${dateRus} \nВремя: ${hour}:${minute}:${second}`);

    return result;
}

console.log(dateFull(myDate));





