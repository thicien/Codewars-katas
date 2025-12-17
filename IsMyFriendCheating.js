function removeNb(n) {
    const result = [];
    const S = (n * (n + 1)) / 2;
    const target = S + 1;
    for (let a = 1; a <= n; a++) {
        const b = target / a - 1;
        if (Number.isInteger(b) && b >= 1 && b <= n) {
            result.push([a, b]);
        }
    }
    return result;
}
console.log(removeNb(26));