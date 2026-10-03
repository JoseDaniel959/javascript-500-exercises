function geTypeOf(data:any){
    return typeof data;
}

console.log(geTypeOf([1,2,3]))
console.log(geTypeOf(3))
console.log(geTypeOf('3'))
console.log(geTypeOf({name:"paulista"}))
console.log(geTypeOf(true))
console.log(geTypeOf(()=>{}))




