function duplicateOrUnique(arr) {
  const uniqueNums = [...new Set(arr)];
  const sumArr = arr.reduce((a, b) => a + b, 0);
  const sumSet = uniqueNums.reduce((a, b) => a + b, 0);
  if (arr.length === uniqueNums.length + 1) {
    return sumArr - sumSet;
  } else {
    return 2 * sumSet - sumArr;
  }
}
console.log(duplicateOrUnique([1,2,3,6,5,4,1]));                    
console.log(duplicateOrUnique([1,2,3,1,2,3,4]));                     
console.log(duplicateOrUnique([3,6,9,2,5,8,1,4,8,7]));               
console.log(duplicateOrUnique([9,8,7,1,2,3,9,7,1,2,3,4,4,5,5,6,6])); 
