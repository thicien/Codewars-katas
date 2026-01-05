function dontGiveMeFive(start, end) {
  function countWithout5(n) {
    if (n < 0) return 0;
    const s = n.toString();
    let total = 0;

    for (let i = 0; i < s.length; i++) {
      const d = Number(s[i]);
      const remaining = s.length - i - 1;
      total += (d - (d > 5 ? 1 : 0)) * Math.pow(9, remaining);
      if (d === 5) return total;
    }
    return total + 1;
  }
  if (start >= 0) {
    return countWithout5(end) - countWithout5(start - 1);
  }
  if (end < 0) {
    return countWithout5(-start) - countWithout5(-end - 1);
  }
  return countWithout5(end) + countWithout5(-start) - 1;
}
console.log(dontGiveMeFive(1, 9));
console.log(dontGiveMeFive(4, 17));
console.log(dontGiveMeFive(-5, 5));
console.log(dontGiveMeFive(-15, -5));

