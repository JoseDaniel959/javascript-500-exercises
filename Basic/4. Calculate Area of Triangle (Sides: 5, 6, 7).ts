const firstSide:number = 5;
const secondSide:number = 6;
const thirdSide:number = 7;

const semiperimeter:number =(firstSide + secondSide + thirdSide)/2
const heronFormula = Math.sqrt(semiperimeter*(semiperimeter-firstSide)*(semiperimeter-secondSide)*(semiperimeter-thirdSide));

console.log(heronFormula);