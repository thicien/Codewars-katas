function findMissingLetter(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let first = array[i].charCodeAt(0);
    let second = array[i + 1].charCodeAt(0);

    if (second - first > 1) {
      return String.fromCharCode(first + 1);
    }
  }
}
console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));