function print10Numbers() {

    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }

}

const arrowPrint10Numbers = () => {
    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }
}

console.log(print10Numbers.name)
console.log(arrowPrint10Numbers.name)
