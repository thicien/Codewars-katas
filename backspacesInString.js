function cleanString(str) {
    //... your code ...
  let word = [];
  for (let char of str) {
    if (char === '#') {
      if (word.length > 0) {
        word.pop();
      }
    } else {
      word.push(char);
    }
  }
  return word.join('');
}
console.log(cleanString("abc##d#e#f"));