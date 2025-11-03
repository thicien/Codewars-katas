function arrayToString(arr) {
  if (!Array.isArray(arr)) return String(arr);
  const elements = arr.map(el => {
    if (Array.isArray(el)) {
      return arrayToString(el); 
    } else if (typeof el === "string") {
      return `'${el}'`;
    } else {
      return String(el);
    }
  });
  return `[${elements.join(",")}]`;
}
console.log(arrayToString([])); 
console.log(arrayToString([3.14])); 
console.log(arrayToString([1,2,3]));
console.log(arrayToString(["Hello World",3.14,"Lorem Ipsum"]));
console.log(arrayToString([1,[2,4]]));
console.log(arrayToString([1,2,[3,4],[5,6],[[7]],[8,[9]]]));
console.log(arrayToString([true,false]));

