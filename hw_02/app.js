console.log ('------Home work 02 Task 01----------')
let a = prompt ( 'Введите значение а');
let b = prompt (' Введите значение b');
let x1 = (a + b / 2 * 4);
let x2 = 400;
let x3 = a - b + 2 / b * 4;
if ( a > b ) {
    console.log (x1);

if ( a === b ) {
    console.log (x2);
}
if ( a < b ) {
    console.log (x3);
}
console.log ('------Home work 02 Task 01----------')
let a = prompt ( 'Введите значение а');
let b = prompt (' Введите значение b');
let x;
if (a > b) {
    console.log (x = a + b / 2 * 4);
} else if (a === b) {
    console.log (x = 400);
} else if (a < b) {
    console.log (x = a - b + 2 / b * 4);
}


console.log ('------Home work 02 Task 02_01----------')
let x = prompt ('Введите координату по оси Х?');
let y = prompt ( 'Введите координату по оси У?');

if (y >= 1 - x) {
    if (y > 0 && y < 4 && x > -4 && x < 4) {
        alert ( 'Точка попадает в область');
    }
} else {
    alert (' Точка не попадает в область');
}

console.log ('------Home work 02 Task 02_02----------')
let x = prompt ('Введите координату по оси Х?');
let y = prompt ( 'Введите координату по оси У?');

if (y >= 0 && y <= 1) {
    if (x >= -y && x <= y) {
        alert ( 'Точка попадает в область');
    }
} else {
    alert (' Точка не попадает в область');
} else if (y >= -1 && y < 0) {
    if (x >= y && x <= -y) {
        alert("Точка попадает в область");
    } else {
        alert("Точка не попадает в область");
    }
}

console.log ('------Home work 02 Task 02_03----------')
let x = prompt ('Введите координату по оси Х?');
let y = prompt ( 'Введите координату по оси У?');

if ((x * x) +(y * y) = 1) {
    if (y <= 0 && y >= -2; x >= y && x <= 0){
        alert("Точка попадает в область"){
        else {
                alert("Точка не попадает в область");
            }
        }
    }
}

console.log ('------Home work 02 Task 03----------')

let dayWeekNumber = prompt ( "Введите номер дня недели?");
switch (dayWeekNumber) {
    case '1':
        alert ('Monday');
        break;
    case '2':
        alert ('Tuesday');
        break;
    case '3':
        alert ('Wednesday');
        break;
    case  '4':
        alert ('Thursday');
        break;
    case '5':
        alert ('Friday');
        break;
    case '6':
        alert ('Saturday');
        break;
    case '7':
        alert ('Sunday');
        break;
    default:
        alert ('Такого дня недели не существует!');
}


console.log ('------Home work 02 Task 04----------')
let number1 = prompt ( 'Введите число?');
let number2 = prompt( 'Введите число?');
if (number1 < number2){
    alert ('Неправда');
} else {
    alert ('Правда');
}



console.log ('------Home work 02 Task 05----------')
let num1 = 1, num2 = 2;
if (num1 > num2) {
    alert ( 'Неправильно!' );
}
if (num1 === num2) {
    alert ( 'Увы..но нет((' );
} else {
    alert ( 'Правильно!!' );
}



console.log ('------Home work 02 Task 06----------')
let numberFlat = prompt ( 'Введите номер квартиры?', '');
if (numberFlat >= 1 && numberFlat <= 20) {
    alert ( 'Добро пожаловать в первый подъезд!');
}
if (numberFlat >=21 && numberFlat <= 48) {
    alert ( 'Добро пожаловать во второй подъезд!' );
}
if (numberFlat >=49 && numberFlat <=90) {
    alert ( 'Добро пожаловать в третий подъезд!');
}
if (numberFlat < 1 && numberFlat > 90) {
    alert ( 'Вам явно не в этот дом надо!');
}

console.log ('------Home work 02 Task 07----------')
let logUser = prompt ('Введите логин', '');
let passUser = prompt( 'Введите пароль', '');
if (logUser === 'ivan' || 'alex' || 'petr'; passUser === '334455' || '777' || 'b5678') {
    alert( 'Welcome');
} else {
    alert ('No enter');
}

console.log ('------Home work 02 Task 07----------')
let log1 = prompt ('Введите ваш логин?', '');
if ( log1 === 'ivan') {
    let pass1 = prompt('Введите пароль?', '');
    if (pass1 === '334455') {
        alert('Добро пожаловать');
    } else if (pass1 === '' || pass1 == null) {
        alert('Ошибка входа');
    } else {
        alert('Ошибка входа');
    }
else
    if (log1 === '' || log1 == null) {
        alert('Ошибка входа');
    } else {
        alert('Ошибка входа')
    }
}
let log2 = prompt ('Введите ваш логин?', '');
if ( log2 === 'alex') {
    let pass2 = prompt('Введите пароль?', '');
    if (pass2 === '777') {
        alert('Добро пожаловать');
    } else if (pass2 === '' || pass2 == null) {
        alert('Ошибка входа');
    } else {
        alert('Ошибка входа');
    }
else
    if (log2 === '' || log2 == null) {
        alert('Ошибка входа');
    } else {
        alert('Ошибка входа')
    }
}
let log3 = prompt ('Введите ваш логин?', '');
if ( log3 === 'petr') {
    let pass3 = prompt('Введите пароль?', '');
    if (pass3 === 'b5678') {
        alert ( 'Добро пожаловать');
    } else if (pass3 === '' || pass3 == null) {
        alert ( 'Ошибка входа');
    } else {
        alert ( 'Ошибка входа');
    } else if (log3 === '' || log3 == null) {
        alert ( 'Ошибка входа' );
    } else {
        alert ( 'Ошибка входа' )
    }
}



console.log ('------Home work 02 Task 08----------')

let yourBirthDay = prompt ('Введите Ваш год рождения?');
let nowYear = 2019;
let age = nowYear - yourBirthDay;
if (age > 16) {
    alert ( 'Добро пожаловать!')
} else {
    alert ( 'Вход воспрещен!');
}



console.log ('------Home work 02 Task 09----------')
let i = prompt ('Сколько лет Вы работаете?' );
if (i >= 0; i <= 3;) {
    alert ( 'Ваша надбавка - 0%' );
}
if (i >= 3; i <= 10;) {
    alert ( 'Ваша надбавка - 10%');
}
if (i >= 10; i <= 20;) {
    alert ( 'Ваша надбавка - 20%' );
}
if (i > 20) {
    alert ( 'Ваша надбавка - 25%' );
}

console.log ('------Home work 02 Task 10----------')
let numGoods = prompt ('Введите количество товара' );
let result = numGoods % 100;
if (result >= 5 % result <= 20) {
    alert ('У Вас' + result + 'товаров');
} else {
    result = result % 10;
    if (result === 1) {
        alert ('У Вас' + result + 'товар');
    } else if (result >= 2 && result <= 4){
        alert ('У Вас' + result + 'товара');
    }
}

console.log ('------Home work 02 Task 11----------')
let choice = prompt( 'Что желаете?');
let nonAlcohol, alсohol, cigarette, age;
if (choice === nonAlcohol){
    alert (' Пожалуйста, выбирайте');
} if (choice === alсohol || choice === cigarette){
    alert ('Укажите Ваш возраст?'){
        if (age < 18) {
            alert('Извините, Вам алкоголь мы не можем продать');
        else (age >= 18){
                alert( 'Мы можем продать Вам алкоголь и сигареты');
            }
        }
    }
}


console.log ('------Home work 02 Task 12----------')
let drink = prompt( 'Do you want?');
let coffe, americano, espresso;
if (drink === coffe){
    alert ('americano or espresso?');
    if (drink === americano && drink === espresso){
        alert ('sugar?');
        let sugar = prompt( "amount of sugar?");
    } if (sugar >=0 && sugar <= 2){
        alert ('ok');
    } if (sugar > 2){
        alert ('it is bad for your health');
    }
}