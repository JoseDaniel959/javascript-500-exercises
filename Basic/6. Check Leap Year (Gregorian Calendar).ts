
let year: number = 2002;
let stringYear: string = year + '';

if (stringYear[stringYear.length - 1] === '0' && stringYear[stringYear.length - 2] === '0') {
    if (year % 400 === 0) {
        console.log("It's a leap year");

    }
}
else if (year % 4 === 0) {
    console.log("It's a leap year");

}
else{
    console.log("It's not a leap year");

}