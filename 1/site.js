"use strict";
var x1 = 2;
var y1 = 4;
var x2 = 4;
var y2 = 2;
// y = k * x + b;
var k = (y1 - y2) / (x1 - x2);
console.log(k);
var b = y2 - k * x2;
console.log(b);
if (b > 0) {
    console.log('y = ' + k + 'x+' + b);
}
else if (b == 0) {
    console.log('y = ' + k + 'x');
}
else if (b < 0) {
    console.log('y = ' + k + 'x' + b);
}
////////////////
var arr = [1, 2, 3, 4, 5];
var newArray = [];
for (var ind_1 = arr.length - 1; ind_1 >= 0; ind_1--) {
    console.log(ind_1);
    console.log(arr[ind_1]);
    console.log('-----------');
}
for (var ind_2 = 0; ind_2 < arr.length; ind_2++) {
    newArray[ind_2] = arr[arr.length - ind_2 - 1];
}
console.log(newArray);
/////////////
var arr = [1, 2, 3, 4, 5, 6, 7];
var l = arr.length;
var lHalf = Math.floor(l / 2);
console.log(l);
console.log(lHalf);
var indNew = l - lHalf + 1;
for (var ind_3 = 0; ind_3 < lHalf; ind_3++) {
    var temp = arr[ind_3];
    arr[ind_3] = arr[indNew];
    arr[indNew] = temp;
}
console.log(arr);
////////////////
var user = {
    name: "Mike",
    age: 32,
};
var user2 = {
    name: "John",
    age: 30,
};
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (a === null || typeof (a) != 'object' ||
        b === null || typeof (b) != 'object') {
        return false;
    }
    var keysInA = 0;
    var keysInB = 0;
    var key;
    for (key in a) {
        keysInA += 1;
    }
    for (key in b) {
        keysInB += 1;
        if (!(key in a) || !deepEqual(a[key], b[key])) {
            return false;
        }
    }
    return keysInA === keysInB;
}
console.log(deepEqual(user, user2));
//////////////////////
function isEven(n) {
    if (n === 0) {
        return 'true';
    }
    else if (n === 1 || n === -1) {
        return 'false';
    }
    else if (n < 0) {
        return checkNumber(n);
    }
    else {
        return isEven(n - 2);
    }
    function checkNumber(n) {
        return isEven(n + 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-100));
/////////////////////////
var counter = 0;
var array = [];
var arraySize = 10000;
var ind;
for (ind = 0; ind < arraySize; ind++) {
    array[ind] = Math.floor(Math.random() * 101);
}
for (ind = 0; ind < arraySize; ind++) {
    if (array[ind] % 2 === 0) {
        counter += 1;
    }
}
console.log(counter);
var probability = (counter / 10000) * 100;
console.log(probability);
////////////////////////
var f1 = 1;
var f2 = 2;
var fElements = '1, 1';
var fSum;
var userNum = +prompt('Введите количество чисел ряда Фибоначи.');
for (var ind_4 = 3; ind_4 <= userNum; ind_4++) {
    var fSum_1 = f1 + f2;
    f1 = f2;
    f2 = fSum_1;
    fElements = fElements + ' , ' + fSum_1;
}
console.log('Первые ' + userNum + ' чисел Фибоначи равны ' + fElements);
//# sourceMappingURL=site.js.map