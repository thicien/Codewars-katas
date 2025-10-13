function digitSum(x) {
  return x.toString().split('').reduce((s, d) => s + Number(d), 0);
}

function solve(n) {
  let s = n.toString();
  let len = s.length;
  let a = Number('9'.repeat(len - 1));
  let b = n - a;
  return digitSum(a) + digitSum(b);
}
console.log(solve(29));   
console.log(solve(100));  
console.log(solve(483));  
