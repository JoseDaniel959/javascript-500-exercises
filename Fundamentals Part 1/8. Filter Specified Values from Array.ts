/*
Write a JavaScript program to filter out the specified values from a specified array. 
Return the original array without filtered values.
*/

const stringArray: Array<String> = ['a', 'b','z','b', 'b', 'b', 'c','z','c','z', 'a', 'b', 'c', 'c', 'a'];
let arra2 = ['a', 'b', 'c', 'a', 'b', 'c'];

const filterSpecifiedValue = (array: Array<String>, ...args: any[]) => {



    let currentIndex = 0;
    while (array.length > currentIndex) {
        let elementI = array[currentIndex];

        let indexToRemove = args.indexOf(elementI);
        if (indexToRemove > -1) {
            console.log("soy el indice", currentIndex)
            array.splice(currentIndex, 1)
        }
        else {
            currentIndex++;

        }
    }

}

filterSpecifiedValue(arra2, 'b')

console.log(arra2)