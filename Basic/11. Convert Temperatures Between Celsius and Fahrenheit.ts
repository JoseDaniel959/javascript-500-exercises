const toCelcius = (FarhenintDegree: number) => 5 *((FarhenintDegree - 32)/9)
const toFahrenheit = (CelciustDegree: number) => (CelciustDegree* (9/5)) + 32;

console.log("From Celcius degress to Fahrenheit", toFahrenheit(60))
console.log("From Fahrenhei degress to Celcius", toCelcius(45))

