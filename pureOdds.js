function onlyOddDigPrimes(n) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
    }
    
  function hasOnlyOddDigits(num) {
    return num
      .toString()
      .split('')
      .every(digit => digit % 2 !== 0);
  }

  let count = 0;
  let largestBelow = null;

  // Count and find largest ≤ n
  for (let i = 2; i <= n; i++) {
    if (isPrime(i) && hasOnlyOddDigits(i)) {
      count++;
      largestBelow = i;
    }
  }

  // Find smallest > n
  let smallestAbove = n + 1;
  while (true) {
    if (isPrime(smallestAbove) && hasOnlyOddDigits(smallestAbove)) {
      break;
    }
    smallestAbove++;
  }

  return [count, largestBelow, smallestAbove];
}
console.log(onlyOddDigPrimes(20)); // [7, 19, 31]
console.log(onlyOddDigPrimes(40)); // [9, 37, 53]
console.log(onlyOddDigPrimes(11)); // [5, 11, 13]
