let reversedString: string = "w3resource";
let reversedStringList = reversedString.split('');
let another = []
// reversedStringList.forEach(letter => {
//     let lastElement = reversedStringList.pop();    
//     if(lastElement) another.push(lastElement);

// });

for (let i = 0; i < reversedString.length; i++) {
    let lastElement = reversedStringList.pop();
    console.log(lastElement)
    if (lastElement) another.push(lastElement);
}


console.log(another.join(""))

