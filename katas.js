function makeLooper(str) {
  let i = 0;
  return function() {
    const ch = str[i];
    i = (i + 1) % str.length;
    return ch;
  };
}
const abc = makeLooper('abc');
console.log(abc()); 
console.log(abc()); 
console.log(abc()); 
console.log(abc());