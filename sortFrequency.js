function solve(arr) {
  return arr.sort((a, b) => {
    const freqA = arr.filter(x => x === a).length;
    const freqB = arr.filter(x => x === b).length;
    if (freqA === freqB) {
      return a - b;
    } else {
      return freqB - freqA;
    }
  });
}
console.log(solve([2,3,5,3,7,9,5,3,7]));