const checkIfTwoIntegersAreInRange = (number1: number, number2: number,) =>(
    (50<= number1 && number1 <= 99) || (50<= number2 && number2 <=99) 
    ? true : false
)

console.log(checkIfTwoIntegersAreInRange(50,50))
console.log(checkIfTwoIntegersAreInRange(0,100))
