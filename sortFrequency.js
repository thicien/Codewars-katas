function solve(arr) {
  return arr.sort((a, b) => {
    const myFreq1 = arr.filter(x => x === a).length;
    const myFreq2 = arr.filter(x => x === b).length;
    if (myFreq1 === myFreq2) {
      return a - b;
    } else {
      return myFreq2 - myFreq1;
    }
  });
}
console.log(solve([2,3,5,3,7,9,5,3,7]));