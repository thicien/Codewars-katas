function areEqual(value1, value2) {
  if (value1 === value2) return true;
  if (typeof value1 !== typeof value2) return false;
  if (typeof value1 === 'string') return value1 === value2;
  if (Array.isArray(value1)) {
    if (!Array.isArray(value2) || value1.length !== value2.length) {
      return false;
    }
      return value1.every((item, index) =>
      areEqual(item, value2[index])
    );
  }

  if (typeof value1 === 'object' && value1 !== null && value2 !== null) {
    const keysA = Object.keys(value1);
    const keysB = Object.keys(value2);

    if (keysA.length !== keysB.length) return false;

    return keysA.every(key =>
      areEqual(value1[key], value2[key])
    );
  }

  return false;
}
console.log(areEqual({ a: ['5','6','7'], b: ['4','5','6'] }, { a: ['5','6','7'], b: ['4','5','6'] })); 
console.log(areEqual('Hello', 'Hello')); 
console.log(areEqual({ a: 4 }, { b: 3 }));
console.log(areEqual({ laura: 4, adam: 3 }, { laura: 4, adam: 3 }));