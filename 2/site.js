let arr = [
    first = { time: '10:10',
              name: 'Nastya',
              message: 'Hello!' },
    second = { time: '11:11',
               name: 'Oleg',
               message: 'Hello!' }
];

let topPart = document.querySelector('.top-part');
let timeOne = document.querySelector('.time-one');
let contentOne = document.querySelector('.content-one');
let bottomPart = document.querySelector('.bottom-part');
let timeTwo = document.querySelector('.time-two');
let contentTwo = document.querySelector('.content-two');

timeOne.innerHTML = '';
contentOne.innerHTML = '';
timeTwo.innerHTML = '';
contentTwo.innerHTML = '';

timeOne.innerHTML += `${arr[0].time}`;
contentOne.innerHTML = `<span>${arr[0].name}</span> <br> <span>${arr[0].message}</span>`;
timeTwo.innerHTML = `${arr[1].time}`;
contentTwo.innerHTML = `<span>${arr[1].name}</span> <br> <span>${arr[1].message}</span>`;

