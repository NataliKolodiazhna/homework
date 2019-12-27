console.log('---------Home work 03 Task 01----------')
for (let num = 4 ; num >= 4, num <= 400; num++) {
    console.log(num);
}

console.log('---------Home work 03 Task 02----------')
for (let num = 4; num >= 4, num <= 13; num += 3) {
    console.log(num);
}

console.log('---------Home work 03 Task 03----------')
for (let num = 654; num >= 0, num <= 654; num--) {
    console.log(num);
}

console.log('---------Home work 03 Task 04----------')
for (let year = 1983; year >= 1983, year <= 2017; year++) {
    console.log(year);
}


console.log('---------Home work 03 Task 05----------')
for (let num = - 4 ; num >= - 4, num <= 100; num += 2) {
    console.log(num);
}

console.log('---------Home work 03 Task 06----------')
for (let num = 7; num <= 7; num ++){
    for (let n = 1; n <= 9; n++){
        console.log (num*n);
    }
}

console.log('---------Home work 03 Task 07----------')
for (let symbol = 1000; symbol < 2000; symbol++){
    console.log(`&#${symbol}`);
}


console.log('---------Home work 03 Task 08----------')
let sum = 0;
for (let i = 0; i <= 100; i++){
    console.log (sum + i);
}

console.log('---------Home work 03 Task 09----------')

let i = 1;
while (i <= 50) {
    console.log(i * (i++));
}


console.log('---------Home work 03 Task 10----------')

let arrX = [];
let arrXLength = prompt ('Введите длину массива', '5');
for (let i = 1; i <= arrXLength; i++) {
    let str = '';
    for(let j = 1; j <= i; j++) {
        str = str.concat('x');
    }
    arrX.push(str);
}
console.log(arrX);

console.log('---------Home work 03 Task 11----------')

let arrMy = [];
let arrMyLength = prompt ('Введите длину массива', '4');
for (let i = 1; i <= arrMyLength; i++) {
    let str11 = i.toString();
    for(let j = 2; j <= i; j++) {
        str11 = str11.concat(i.toString());
    }
    arrMy.push(str11);
}
console.log(arrMy);

console.log('---------Home work 03 Task 12----------')

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 1;
for (let i = 0; i < arrNum.length; i++) {
    sum += arrNum [i];
    if (sum > 10) {
        console.log (i+1);
    }
}


console.log('---------Home work 03 Task 13----------')

let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrConversely = [];
for (let i = arrNum.length - 1; i >= 0; i--) {
    arrConversely.push(arrNum [i]);
}
console.log (arrConversely);

console.log('---------Home work 03 Task 14----------')
let arrNum = [-2, -1, 0, 1, 2, 3, 7, 9, 25];
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] > 0 && arrNum[i] < 10) {
        console.log(arrNum[i]);
    }
}

console.log('---------Home work 03 Task 15----------')
const arrNum = [0, 1, 2, 3, 4, 5, 6, 7];
let result = [];
for (let elem of arrNum) {
    if (elem % 2 === 0) {
        result.push(elem);
    }
}
console.log(result);

console.log('---------Home work 03 Task 17----------')

let array = [1, 2, 3, 4, 5, 6];
let arr = [];
for (let i = array.length - 1; i > 0; i -= 2) {
   arr.push (array[i - 1], array[i]);
}
console.log(arr);

console.log('---------Home work 03 Task 16----------')
let arrNum = [1, 2, 3, 4, 5, 6];
let result = [];
for (let i = 0; i < arrNum.length; i += 2){
    result.push(arrNum[i+1], arrNum[i]);
}
console.log(result);


console.log('---------Home work 03 Task 18----------')

let arrNum = [[1, 2, 3], [4, 5], [6]];
let sum = 0;
for (let i = 0; i < arrNum.length; i ++) {
    for (let j = 0; j < arrNum[i].length; j++) {
        sum += arrNum[i][j];
    }
}
console.log(sum);

console.log('---------Home work 03 Task 19_01----------')

const Matrix = [];
for (let i = 1; i < 11; i++){
    Matrix[i] = [];
    for (let j = 1; j < 11; j++){
        Matrix [i][j] = (i * j);
    }
}
console.log(Matrix);

console.log('---------Home work 03 Task 19_02----------')

const matrix = [];
const n = 10;
for(let i = 0; i < n; i++) {
    matrix[i] = [];
    for(let j = 0; j < n; j++) {
        if(i === j) {
            matrix[i][j] = 1;
        } else if(i === (n - 1) - j) {
            matrix[i][j] = 2;
        } else if(j > i && i < (n - 1) - j) {
            matrix[i][j] = 3;
        } else if(j < i && i < (n - 1) - j) {
            matrix[i][j] = 6;
        } else if(j > i && i > (n - 1) - j) {
            matrix[i][j] = 4;
        } else if(j < i && i > (n - 1) - j) {
            matrix[i][j] = 5;
        }
    }
}
console.log(matrix);

console.log('---------Home work 03 Task 19_03(не закончена)----------')


let pascal = [];
const n = 9;
for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
        pascal[i] = 1;
        for (let j = 0; j < n; j++) {
            if (i === j) {
                pascal[i][j] = 1;
            } else if (i === (n-1) - j){
                pascal[i][j] = pascal[i] + pascal[j];
            }
        }
    }
}
        console.log(pascal);




