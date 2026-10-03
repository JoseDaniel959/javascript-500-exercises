const checkIfMultipleOf3Or7 = (numberToCheck:number):boolean => {
    if(numberToCheck%3==0) return true;
    else if(numberToCheck%7==0) return true;
    else return false;
}


console.log(checkIfMultipleOf3Or7(10));
