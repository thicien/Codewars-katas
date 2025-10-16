function* countUpTo(n) {
  for (let i = 1; i <= n; i++) {
    yield i;
  }
}

const counter = countUpTo(3);
console.log(counter.next()); 
console.log(counter.next());
console.log(counter.next());
console.log(counter.next()); 
