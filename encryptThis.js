function encryptThis(str) {
  return str.split(" ").map(word => {
    if (word.length === 0) return ""; 
    if (word.length === 1) return word.charCodeAt(0).toString();
    if (word.length === 2) return word.charCodeAt(0) + word[1];
    const first = word.charCodeAt(0);
    const middle = word.slice(2, -1);
    const second = word[word.length - 1];
    const last = word[1];
    return first + second + middle + last;
  }).join(" ");
}
console.log(encryptThis("Hello"));
console.log(encryptThis("good"));
console.log(encryptThis("Hello Rwanda"));
console.log(encryptThis("I am a developer"));