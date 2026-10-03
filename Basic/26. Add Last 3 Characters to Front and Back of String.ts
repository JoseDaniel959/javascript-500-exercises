const addLast3charToFrontAndBack = (s: string) => {
    if(s.length < 3) throw new Error("String has length less than 3");
    const last3Chars = s.substring(s.length-3, s.length-1);
    return `${last3Chars}${s}${last3Chars}`
}


console.log(addLast3charToFrontAndBack("Swift"))