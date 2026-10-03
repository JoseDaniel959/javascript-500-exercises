const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const dayNumber: number  = new Date().getDay(); 
console.log("Today is: ", days[dayNumber]);
console.log("TCurrent time is : ", new Date().getHours(),":",new Date().getMinutes());