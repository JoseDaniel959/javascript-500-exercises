const newString:string = "cabecilla"

function removeStringAt(index:number,stringToModified: string){
    let modifiedString = stringToModified.slice(0,index) + stringToModified.slice(index +1 ,stringToModified.length);
    return modifiedString;
}

console.log(removeStringAt(3,"Python"))