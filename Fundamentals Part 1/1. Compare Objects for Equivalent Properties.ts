const obj1 = {
    name: "Jose Daniel",
    cc: "1001013931",
}

const sameObj1 = {
    name: "Jose Daniel",
    cc: "1001013931",
}

const obj2 = {
    name: "Mauricio Lizcano",
    cc: "69696969",
}

const obj3 = {
    name: "Beatriz Elenea",
    cc: "43671282",
    beautiful: "true"

}
const obj4 = {
    name: "Stevie ray vaughan",
    beautiful: "true"

}



const objectsContainSameKeys = (object1: any, object2: any): boolean => {

    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }

    for (let objKey1 in object1) {
        if (object2[objKey1] !== object1[objKey1]) return false;
    }

    return true;

}

console.log(objectsContainSameKeys(obj1, sameObj1));
