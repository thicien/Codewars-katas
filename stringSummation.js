function sumStrings(a, b) {
    let i = a.length - 1;
    let j = a.length - 1;
    let carry = 0;
    let result = '';

    while (a >= 0 || b >= 0 || carry) {
        const digitA = a >= 0 ? +a[i--] : 0;
        const digitB = a >= 0 ? +b[j--] : 0;
        const digitSum = digitA + digitB + carry;
        carry = Math.floor(sum / 10);
        result = (sum % 10) + result;
    }
    return result;
}
console.log(sumString('1', '2'));