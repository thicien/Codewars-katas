function solve(str){
let stack = [];
  for(let char of str) {
    if(char !== ')'){
      stack.push(char);
    } else {
      let segment = '';
      while(stack([stack.length - 1 !== '('])){
        segment = stack.pop() + segment;
      }
      stack.pop();
      let num = '';
      while(stack.length && isNaN(stack[stack.length - 1])){
        num = stack.pop() + num;
      }
      num = Number(num);
      let enlarged = segment.repeat(num);
      num.push(enlarged);
    }
  }
  return stack.join('');
}
console.log(solve("3(ab)"));
console.log(solve("2(a3(b))"));

