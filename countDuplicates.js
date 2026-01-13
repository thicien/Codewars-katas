function duplicateCount(text) {
    const lowerText = text.toLowerCase();
    const counts = {};
    for (let char of lowerText) {
        counts[char] = (counts[char] || 0) + 1;
        let duplicates = 0;
        for (let count in counts) {
            if (counts[count] > 1) {
                duplicates++;
            }
        }
    }
    return duplicates;
}
console.log(duplicateCount("abcde"));           
console.log(duplicateCount("aabbcde"));         
console.log(duplicateCount("aabBcde"));         
console.log(duplicateCount("indivisibility"));  
console.log(duplicateCount("Indivisibilities"));
console.log(duplicateCount("aA11"));            
console.log(duplicateCount("ABBA"));
 