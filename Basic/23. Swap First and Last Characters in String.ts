function swapFirstAndLastCharacter(stringToModified: string){
    let firstChar = stringToModified.at(0);
    let lastChar = stringToModified.at(stringToModified.length - 1); 

    let modifiedString = lastChar + stringToModified.slice(1,stringToModified.length-1) + firstChar
    return modifiedString;

}

console.log(swapFirstAndLastCharacter('abc'))