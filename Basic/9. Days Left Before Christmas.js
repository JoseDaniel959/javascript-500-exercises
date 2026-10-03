"use strict";
const todayDate = new Date();
const christmasDate = new Date(2026, 11, 24);
const millisecondsInADay = 1000 * 60 * 60 * 24;
const daysBeforeChristmas = Math.abs((christmasDate.getTime() - todayDate.getTime())) / millisecondsInADay;
prompt("hola");
console.log(daysBeforeChristmas);
