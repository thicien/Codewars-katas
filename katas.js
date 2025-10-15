function smallest(n) {
  let s = [...String(n)], best = [n, 0, 0];
  for (let i = 0; i < s.length; i++) {
    let t = [...s];
    let d = t.splice(i, 1)[0]; 
    for (let j = 0; j <= s.length - 1; j++) {
      let num = +[...t.slice(0, j), d, ...t.slice(j)].join('');
      if (num < best[0] || (num === best[0] && (i < best[1] || (i === best[1] && j < best[2]))))
        best = [num, i, j];
    }
  }
  return best;
}

smallest(261235) 
smallest(209917) 
smallest(1000000) 

