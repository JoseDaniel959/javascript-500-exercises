/*
Write a JavaScript program to create another string from a given 
string with the first character of the given string added to the front and back.  
*/

const addString =(stringToAdd:string) =>{
    return `${stringToAdd[0]}${stringToAdd}${stringToAdd[0]}`;
}

console.log(addString("Swift"))