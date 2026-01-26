function stringTransformation(str, pattern) {
    for (let op of pattern) {
        if (op === "U") {
            str = str.toUpperCase();
        } else if (op === "L") {
            str = str.toLowerCase();
        } else if (op === "R") {
            str = str.split('').reverse().join('');
        } else if (op === "D") {
            str = str.split('').map(c => c + c).join('');
        }
    }
    return str;
}
console.log(stringTransformation("abcd", ["U","R"])); 

console.log(stringTransformation("abc", ["D","L"])); 

console.log(stringTransformation("AbCd", ["L","R"])); 

