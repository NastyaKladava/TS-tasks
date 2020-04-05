var arr = [
    { time: '10:10',
        name: 'Nastya',
        message: 'Hello!' },
    { time: '11:11',
        name: 'Oleg',
        message: 'Hello!' }
];
var topPart = document.querySelector('.top-part');
var timeOne = document.querySelector('.time-one');
var contentOne = document.querySelector('.content-one');
var bottomPart = document.querySelector('.bottom-part');
var timeTwo = document.querySelector('.time-two');
var contentTwo = document.querySelector('.content-two');
timeOne.innerHTML = '';
contentOne.innerHTML = '';
timeTwo.innerHTML = '';
contentTwo.innerHTML = '';
//timeOne.innerHTML += `${arr[0].time}`;
for (var i = 0; i < arr.length; i++) {
    timeOne.innerHTML += "" + arr[i].key.innerHTML;
}
