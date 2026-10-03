let counter:number = 0;

for(let year = 2014;year<=2050;year++){
    const firstDayOfTheYear = new Date(year,1,1);
    firstDayOfTheYear.getDay() === 0 ? counter++ : counter
}

console.log(counter)