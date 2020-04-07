let mainForm : HTMLElement= document.querySelector('.main-form') as HTMLElement;

let arr : {time : string, name : string, message : string} [] = [
    { time: '10:10',
      name: 'Nastya',
      message: 'Hello!' },
    { time: '11:11',
      name: 'Oleg',
      message: 'Hello!' }
];

mainForm.innerHTML = '';


for (let i = 0; i < arr.length; i++) {
    mainForm.innerHTML +=
     `<div class="cell">
        <div class="time">${arr[i].time}</div>
        <div class="content">${arr[i].name} <br> ${arr[i].message}</div>
    </div>
    `
}