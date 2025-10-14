function solve(s) {
  let stack = [];

  for (let char of s) {
    if (char !== ')') {
      stack.push(char);
    } else {
      let segment = '';
      while (stack[stack.length - 1] !== '(') {
        segment = stack.pop() + segment;
      }
      stack.pop();
      let num = '';
      while (stack.length && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num;
      }
      num = Number(num);
      let expanded = segment.repeat(num);
      stack.push(expanded);
    }
  }
  return stack.join('');
}
console.log(solve("3(ab)"));        
console.log(solve("2(a3(b))"));     
console.log(solve("3(a2(bc))"));    
console.log(solve("2(abc)3(cd)ef")); 

