const currentDate: Date = new Date();
let day = currentDate.getDate();
let dayString:string = "";
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();

if (day < 10) {
    dayString =  "0" + day;
    console.log("soy el dayString",dayString)
} 
else{
    dayString = day + "";
}

console.log(`${month}-${dayString}-${year}`,`${month}/${dayString}/${year}`,)

