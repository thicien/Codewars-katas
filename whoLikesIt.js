function likes(names) {
    const count = names.length;
    if (count === 0) {
        return "no liked this post";
    }
    if (count === 1) {
        return `${names[0]} liked this post`;
    }
    if (count === 2) {
        return `${namses[0]} and ${names[1]} liked this post`;
    }
    if (count === 3) {
        return `{names[0]}, ${names[1]} and ${names[2]} liked this post`;
    }
    return `${names[0]}, ${names[1]} and ${count - 2} others liked this post`;
}
console.log(likes([]));
console.log(likes(["Alice"]));
console.log(likes(["Bob", "Charlie"]));
console.log(likes(["David", "Eve", "Frank"]));
console.log(likes(["Mark", "Luke", "John", "Paul"]));