function notPrimes(a, b) {
  function digitsArePrime(n) {
    return n.toString().split("").every(d => ["2", "3", "5", "7"].includes(d));
  }

  function isPrime(n) {
    if (n < 2) return false;
    if (n % 2 === 0) return n === 2;
    let r = Math.floor(Math.sqrt(n));
    for (let i = 3; i <= r; i += 2) {
      if (n % i === 0) return false;
    }
    return true;
    }
    
  let result = [];
  for (let n = a; n < b; n++) {
    if (digitsArePrime(n) && !isPrime(n)) {
      result.push(n);
    }
  }
  return result;
}
console.log(notPrimes(2, 100));