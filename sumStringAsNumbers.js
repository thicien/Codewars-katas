function sumStrings(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let result = [];

    while (i >= 0 || j >= 0 || carry) {
        const digitA = i >= 0 ? a.charCodeAt(i) - 48 : 0;
        const digitB = j >= 0 ? b.charCodeAt(j) - 48 : 0;
        const sum = digitA + digitB + carry;

        carry = sum > 9 ? 1 : 0;
        result.push((sum % 10).toString());

        i--;
        j--;
    }
    return result
        .reverse()
        .join('')
        .replace(/^0+(?!$)/, '');
}
console.log(sumStrings("1", "2"));                
console.log(sumStrings("123", "456"));             
console.log(sumStrings("999", "1"));              
console.log(sumStrings("123456789", "987654321")); 
console.log(sumStrings("00103", "08567"));        

