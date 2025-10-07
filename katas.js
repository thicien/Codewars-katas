function square_sums_row(n) {
  function isSquare(x) {
    return Number.isInteger(Math.sqrt(x));
  }
  function build(path, usedNumbers) {
    if (path.length === n) return path; 

    const last = path[path.length - 1];
    for (let next = 1; next <= n; next++) {
      if (!usedNumbers.has(next) && isSquare(last + next)) {
        usedNumbers.add(next);                
        const result = build([...path, next], usedNumbers);
        if (result) return result;
        usedNumbers.delete(next);
      }
    }
    return null;
  }
  for (let start = 1; start <= n; start++) {
    const used = new Set([start]);
    const result = build([start], used);
    if (result) return result;
  }
  return false;
}
console.log(square_sums_row(15)); 
console.log(square_sums_row(5)); 