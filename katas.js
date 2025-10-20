// subsets 
function subsetSum(xs, target) {
  if (target === 0) return [];
  const sums = new Map();
  sums.set(0, []); 
  for (const num of xs) {
    const newSums = new Map(sums);

    for (const [s, subset] of sums.entries()) {
      const newSum = s + num;
      if (newSum === target) return [...subset, num];
      if (newSum < target && !newSums.has(newSum)) {
        newSums.set(newSum, [...subset, num]);
      }
    }
    for (const [k, v] of newSums) sums.set(k, v);
  }

  return null;
}