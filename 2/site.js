"use strict";
var mainForm = document.querySelector('.main-form');
var arr = [
    { time: '10:10',
        name: 'Nastya',
        message: 'Hello!' },
    { time: '11:11',
        name: 'Oleg',
        message: 'Hello!' }
];
mainForm.innerHTML = '';
var i;
for (i = 0; i < arr.length; i++) {
    mainForm.innerHTML += "<div class=\"top-part\">\n        <div class=\"time-one\">" + arr[i].time + "</div>\n        <div class=\"content-one\">" + arr[i].name + " <br> " + arr[i].message + "</div>\n    </div>\n    ";
}
//# sourceMappingURL=ts-site.js.map