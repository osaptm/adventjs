'use strict';

function daysToXmas(date) {
    var xmas = new Date('Dec 25, 2021');
    var diff = (xmas.getTime()-date.getTime())/1000;
    return Math.ceil(diff/86400);
}

var date1 = new Date('Dec 1, 2021');
console.log(daysToXmas(date1)); // 24
var date2 = new Date('Dec 24, 2021 00:00:01');
console.log(daysToXmas(date2)); // 1
var date3 = new Date('Dec 24, 2021 23:59:59');
console.log(daysToXmas(date3)); // 1
var date4 = new Date("December 20, 2021 03:24:00");
console.log(daysToXmas(date4)); // 5
var date = new Date('Dec 25, 2021');
console.log(daysToXmas(date)); // 0
var date1 = new Date('Dec 26, 2021');
console.log(daysToXmas(date1)); // -1
var date2 = new Date('Dec 31, 2021');
console.log(daysToXmas(date2)); // -6
var date3 = new Date('Jan 1, 2022 00:00:01');
console.log(daysToXmas(date3)); // -7
var date4 = new Date('Jan 1, 2022 23:59:59');
console.log(daysToXmas(date4)); // -7