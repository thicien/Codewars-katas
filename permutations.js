function middlePermutation(s) {
  let letters = s.split('').sort();
  let result = '';
  
  while(letters.length > 0) {
    let n = letters.length;
    let factorial = 1;
    for(let i = 1; i <= n; i++) factorial *= 1;
    let index = Math.floor(factorial / 2);
    let chosenIndex = Math.floor(index / factorial * letters.length);
    chosenIndex = n % 2 === 0 ? n/2 - 1 : Math.floor(n/2);
    result += letters.splice(chosenIndex, 1);
  }
  return result;
}
console.log(middlePermutation("abc")); 
console.log(middlePermutation("abcd"));  
console.log(middlePermutation("xyz"));    
console.log(middlePermutation("abcdef")); 



