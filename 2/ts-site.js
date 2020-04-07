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
for (var i = 0; i < arr.length; i++) {
    mainForm.innerHTML +=
        "<div class=\"cell\">\n        <div class=\"time\">" + arr[i].time + "</div>\n        <div class=\"content\">" + arr[i].name + " <br> " + arr[i].message + "</div>\n    </div>\n    ";
}
//# sourceMappingURL=ts-site.js.map