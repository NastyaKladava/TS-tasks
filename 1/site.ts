let x1: number = 2;
let y1: number  = 4;
let x2: number = 4;
let y2: number= 2;

// y = k * x + b;

let k: number = (y1 - y2) / (x1 - x2);
console.log(k);

let b:number = y2 - k * x2;
console.log(b);


if (b > 0) {
    console.log('y = ' + k + 'x+' +b);
} else if (b == 0) {
    console.log('y = ' + k + 'x');
} else  if (b < 0) {
    console.log('y = ' + k + 'x' +b);
}

////////////////

let arr: Array<number> = [1, 2, 3, 4, 5];
let newArray: number[] = [];

for ( let ind = arr.length - 1; ind >= 0; ind --) {
   console.log(ind);
    console.log(arr[ind]);
    console.log('-----------');
}

for (let ind = 0; ind < arr.length; ind++) {
    newArray[ind] = arr[arr.length - ind - 1];
}

console.log(newArray);
/////////////

let arr: number[] = [1, 2, 3, 4, 5, 6, 7];
let l: number = arr.length;
let lHalf: number = Math.floor(l / 2);

console.log(l);
console.log(lHalf);

let indNew: number = l - lHalf + 1;

for (let ind = 0; ind < lHalf; ind++) {
    let temp = arr[ind];
    arr[ind] = arr[indNew];
    arr[indNew] = temp;
}

console.log(arr);
////////////////

let user: object = {
    name: "Mike",
    age: 32,
};

let user2: object = {
    name: "John",
    age: 30,
  };

function deepEqual(a: any, b: any): boolean {
    if (a === b) {
        return true;
    } 
    if (a === null || typeof(a) != 'object' ||
        b === null || typeof(b) != 'object') {
            return false;
        }
    let keysInA = 0 ;
    let keysInB = 0;
    let key;
    for(key in a) {
        keysInA += 1;
    }
    for(key in b) {
        keysInB += 1;
        if(!(key in a) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return keysInA === keysInB;
}

console.log(deepEqual(user , user2));
//////////////////////

function isEven(n: number): number | string {
    if (n === 0) {
        return 'true';
    } else if (n === 1 || n === -1) {
        return 'false';
    } else if (n < 0){
        return checkNumber(n);
    } else {
        return isEven(n - 2);
    }
    function checkNumber(n: number) {
    return isEven(n + 2);
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-100));
/////////////////////////

let counter: number = 0;
let array: number[] = [];
let arraySize: number = 10000;
let ind: number;

for (ind = 0; ind < arraySize; ind++) {
    array[ind] = Math.floor(Math.random() * 101);
}

for ( ind = 0; ind < arraySize; ind ++) {
    if (array[ind] % 2 === 0) {
        counter += 1;
    }
}

console.log(counter);

let probability:number = (counter / 10000) * 100;
console.log(probability);
////////////////////////

let f1: number = 1;
let f2: number = 2;
let fElements: string = '1, 1';
let fSum: number;
let userNum: any = +prompt('Введите количество чисел ряда Фибоначи.');

for (let ind = 3; ind <= userNum; ind++) {
    let fSum = f1 + f2;
    f1 = f2;
    f2 = fSum;
    fElements = fElements + ' , ' + fSum
}

console.log('Первые ' + userNum + ' чисел Фибоначи равны ' + fElements);