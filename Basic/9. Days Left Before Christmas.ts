const todayDate: Date =  new Date();
const christmasDate: Date = new Date(2026,11,24);
const millisecondsInADay: number = 1000 * 60 * 60 * 24
const daysBeforeChristmas: number = Math.abs((christmasDate.getTime()-todayDate.getTime()))/millisecondsInADay
prompt("hola")
console.log(daysBeforeChristmas)
