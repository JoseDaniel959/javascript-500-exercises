const firstNumber: number = 1;
const secondNumber: number = -2;

if ((firstNumber > 0 && secondNumber < 0) ||
    (secondNumber > 0 && firstNumber < 0)
) console.log("a number is positive and the other one is negative")
else console.log("both number have same sign")