// numbers that are powers of their sum of digits 
function powerSumDigTerm(n) {
  const results = [];

  for (let s = 2; s < 200; s++) { 
    let power = 2;
    while (power < 20) { 
      let num = Math.pow(s, power);

      if (num < 10) { 
        power++;
        continue;
      }

      const sum = num
        .toString()
        .split('')
        .reduce((acc, d) => acc + Number(d), 0);

      if (sum === s) results.push(num);

      power++;
    }
  }

  results.sort((a, b) => a - b);
  return results[n - 1];
}

