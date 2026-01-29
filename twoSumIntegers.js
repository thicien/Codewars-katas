function Add(a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1;
        a = a ^ b;
        b = carry;
    }
    return a;
}
console.log(Add(5, 19));     
console.log(Add(-27, 18)); 
console.log(Add(-14, -16));  
console.log(Add(0, 0));    
console.log(Add(10, -10));
console.log(Add(123456789, 987654321));
