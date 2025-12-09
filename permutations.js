function middlePermutation(s) {
    // Step 1: Sort the string
    let letters = s.split('').sort();
    let result = '';
    
    // Step 2: While there are letters left
    while (letters.length > 0) {
        let n = letters.length;
        // Factorial of remaining letters minus 1
        let factorial = 1;
        for (let i = 1; i < n; i++) factorial *= i;
        
        // Choose the index for the "middle" branch
        let index = Math.floor((letters.length % 2 === 0 ? (letters.length/2 - 1) : (letters.length-1)/2));
        
        // Pick the letter at index and remove it from array
        result += letters.splice(index, 1);
    }
    
    return result;
