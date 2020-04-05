let arr : User [] = [
    { time: '10:10',
      name: 'Nastya',
      message: 'Hello!' },
    { time: '11:11',
      name: 'Oleg',
      message: 'Hello!' }
];

type User = {
    time : string;
    name : string;
    message : string
}

let topPart : HTMLElement = document.querySelector('.top-part') as HTMLElement;
let timeOne :HTMLElement = document.querySelector('.time-one') as HTMLElement;
let contentOne : HTMLElement= document.querySelector('.content-one') as HTMLElement;
let bottomPart : HTMLElement = document.querySelector('.bottom-part') as HTMLElement;
let timeTwo : HTMLElement = document.querySelector('.time-two') as HTMLElement;
let contentTwo : HTMLElement = document.querySelector('.content-two') as HTMLElement;

timeOne.innerHTML = '';
contentOne.innerHTML = '';
timeTwo.innerHTML = '';
contentTwo.innerHTML = '';

timeOne.innerHTML += `${arr[0].time}`;
contentOne.innerHTML = `<span>${arr[0].name}</span> <br> <span>${arr[0].message}</span>`;
timeTwo.innerHTML = `${arr[1].time}`;
contentTwo.innerHTML = `<span>${arr[1].name}</span> <br> <span>${arr[1].message}</span>`;
