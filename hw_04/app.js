/*Написать функцию которая первым принимает значение,
    которым заполнять массив, а вторым - сколько элементов
должно быть в массиве. Пример: arrayFill('x', 5) сделает массив
    ['x', 'x', 'x', 'x', 'x'].*/
console.log('---------Home work 04 Task 1----------')

function arrayFill (elem, numElem) {
    let array = [];
    for (let i = 0; i < numElem; i++){
        array.push(elem);
    }
    return array;
}
console.log (arrayFill('x', 5));


/*Дан трехмерный массив с числами, 
например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
 Найдите сумму элементов этого массива. Массив,
  конечно же, может быть произвольным.*/
console.log('---------Home work 04 Task 2----------')

let arrNum = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
function  sumArr(arrNum) {
    let sum = 0;
 for (let i = 0; i < arrNum.length; i++){
 } for (let j = 0; j < arrNum[i].length; j++) {
     for (let k = 0; k < arrNum[i][j].length; k++) {
     }
    }
  return sum = arrNum[i]+arrNum[j]+arrNum[k];
}
console.log( sumArr(arrNum));
console.log('---------Home work 04 Task 2(2)----------')
function sumAll(...args) {
    let sum = 0;
    for(const arg of args) {
        sum += [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
    }
    return sum;
}

console.log(sumAll([[[1, 2], [3, 4]], [[5, 6], [7, 8]]]));


/*Сделайте функцию isNumberInRange, которая параметром
 принимает число и проверяет, что оно больше нуля и меньше 10.
  Если это так - пусть функция возвращает true, если не так - false.*/
console.log('---------Home work 04 Task 3----------')

function isNumberInRange (num) {
    if (num > 0 && num < 10) {
        return true;
    } else {
        return false;
    }
}

console.log (isNumberInRange(15));

/*Сделайте функцию isEven() (even - это четный), которая
параметром принимает целое число и проверяет: четное оно или нет.
 Если четное - пусть функция возвращает true, если нечетное - false.*/
console.log('---------Home work 04 Task 4----------')
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log (isEven(6));

/*Дан массив с целыми числами. Создайте из него новый массив, где останутся
 лежать только четные из этих чисел. Для этого используйте вспомогательную
 функцию isEven из предыдущей задачи.*/
console.log('---------Home work 04 Task 5----------')
let arrNum = [5, 25, 56, 78, 98, 46, 36];
let arrNew = [];
for (let i = 0; i < arrNum.length; i++) {
    if (isEven(arrNum[i])) {
        arrNew.push(arrNum[i]);
    }
}
console.log(arrNew);
/*Сделайте функцию getDivisors, которая параметром принимает число
и возвращает массив его делителей (чисел, на которое делится данное число).*/
console.log('---------Home work 04 Task 6----------')

function  getDivisors(num) {
let arrDivisors = [];
for (let i = 0; i < num; i++) {
    if (num % i === 1) {
        arrDivisors.push(i);
    }
}
return arrDivisors;
}
console.log(getDivisors(25));

/*Создайте функцию, которая получает два параметра – число и степень числа.
    Используя ** внутри функции, возведите число в степень и выведите с помощью
console.log.*/

console.log('---------Home work 04 Task 7----------')
function calcNumDegree (x, n) {
    let num = x;
    for (let i = 0; i < n; i++) {
        num *= x;
    }
    return num;
}
console.log (calcNumDegree(5, 2));

/*Функция принимает параметр - возраст пользователя.
Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.*/
console.log('---------Home work 04 Task 8----------')
function userAge(year) {
if (year > 16) {
    alert ('Welcome!!');
} else {
    alert ('you are young!!');
}
}
console.log (userAge(33));

/*Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал
 параметр в функцию. В таком случае выведите сообщение – “Введите возраст”. Реализуйте
  два вида проверки наличия аргумента – проверка на undefined и оператор ||.*/
console.log('---------Home work 04 Task 9----------')
function userAge(year) {
    let age = prompt('Enter your age');
    if (year > 16 && year < 100) {
        alert ('Welcome!!');
    } else {
        alert ('you are young!!');
    }
    if (year === '' || year > 100) {
        alert ('Enter your age!!');
    }
}
console.log (userAge(year));

/*Создайте функцию, которая считает длину массива и возвращает ее в виде числа.
Массив в функцию передается как аргумент. Если аргумент не задан – выводится сообщение об ошибке.*/

console.log('---------Home work 04 Task 10----------')
function calcLengthArr(arr) {
    for (let i = 0; i < arr.length; i++){
    }
    return arr.length;
}
console.log (calcLengthArr([1, 2, 3, 5, 7]));

/*Пользователь вводит числа. Если число больше 10, то функция возвращает
квадрат числа, если меньше 7 – пишет, что число меньше 7. Если 8, 9 –
то возвращает соответственно 7 или 8. Реализуйте решение с несколькими return.*/

console.log('---------Home work 04 Task 11----------')
function userNum(num) {
    if (num > 10) {
        return num *= num;
    } if (num < 7) {
        alert ('your number < 7!!');
    } if (num === 9) {
        return num === 9;
    } if (num === 8) {
        return num === 8;
    }
}
console.log (userNum(num));

/*Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
    Для этого сделайте вспомогательную функцию ucfirst, которая будет получать
строку, делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.*/
console.log('---------Home work 04 Task 12----------')
let str = prompt('The day is happy day', '');
let array = str.split(" ");
for (i = 0; i < array.length; i++) {
    array[i] = ucfirst(array[i]);
}
str = array.join(" ");
alert (str);
function ucfirst(str) {
return str.slice(0, 1).toUpperCase() + str.slice(1);
}

/*Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'.*/
console.log('---------Home work 04 Task 13----------')
function strConversely (str){
   let array = str.split ("_");
   for (i = 0; i < array.length; i++) {
       array[i] = ucfirst(array[i]);
   }
   return array.join(" ");
}
console.log(strConversely("var_text_hello"));

/*Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным
 текстом или нет. Функция первым параметром должна принимать текст элемента, а вторым
  - массив, в котором делается поиск. Функция должна возвращать true или false. Показать решение.*/
console.log('---------Home work 04 Task 14----------')
function inArray(elemStr, array) {
for (let i = 0; i < array.length; i++) {
    if (array[i] === elemStr) {
        return true;
    }
}
        return  false;
    }
console.log (inArray("family",["father", "mother", "sister", "brother", "family"] ))


/*Дана строка, например, '123456'. Сделайте из нее '214365'.*/
console.log('---------Home work 04 Task 15----------')
let str = '123456';
function reverseStr(text) {
    let array = str.split ("");
    let arrayNew = [];
    for (let i = 0; i < array.length; i += 2) {
        let result = array.slice(i, i+2).reverse();
        arrayNew = arrayNew.concat(result);
    }
    str = arrayNew.join("");
    return str;
}
console.log(reverseStr('123456'));

/*Напиши функцию создания генератора sequence(start, step).
Она при вызове возвращает другую функцию-генератор, которая
при каждом вызове дает число на 1 больше, и так до бесконечности.
 Начальное число, с которого начинать отсчет, и шаг, задается при
 создании генератора. Шаг можно не указывать, тогда он будет равен одному.
 Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.*/

console.log('---------Home work 04 Task 16----------')
function sequence(start = 0, step = 1) {
    let number = start;
    return function () {
    let value = number;
    number += step;
    return value;
    }
}
let sequence2 = sequence(10, 3);
console.log(sequence2());
console.log(sequence2());

let sequence3 = sequence(7, 1);
console.log(sequence3());
console.log(sequence3());

/*Также, нужна функция take(gen, x) которая вызвает функцию
 gen заданное число (x) раз и возвращает массив с результатами вызовов. */
console.log('---------Home work 04 Task 17----------')
function take(gen, x) {
    let arrNum = [];
    for (let i = 0; i < x; i++);
    arrNum.push(gen);
    return arrNum;
}

console.log(take(5, 0));

let take2 = take(0, 2);
console.log(take(take2, 5));

/*Напиши функцию map(fn, array), которая принимает на вход функцию и массив,
 и обрабатывает каждый элемент массива этой функцией, возвращая новый массив */
console.log('---------Home work 04 Task 18----------')
let array = [1, 2, 3, 4];
function map(fn, array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(square(array[i]))
    }
    return newArray;
}
function square(x) {
    return x * x;
}
console.log(map(square, [1, 2, 3, 4]));
console.log (array);

/*Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
 где gen — функция-генератор вроде той, что была в 17 задании. fmap возвращает
  новую функцию-генератор, которая при каждом вызове берет следующее значение из
   gen и пропускает его через функцию a.*/
console.log('---------Home work 04 Task 19----------')