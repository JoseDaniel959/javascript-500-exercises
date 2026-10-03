const stringStartsWithJava = (s:string) =>(
    s.substring(0,4) ==="Java" ? true : false
)

console.log(stringStartsWithJava("Java"))