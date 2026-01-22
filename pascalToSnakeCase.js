function toUnderscore(input) {
    if (typeof input === 'number') {
        return input.toString();
    }
    return input.replace(/([A - Z])/g, '_$1').toLowerCase().replace(/^_/, '');
}
console.log(toUnderscore("PascalCase"));
console.log(toUnderscore("AnotherExampleHere"));
console.log(toUnderscore("Test"));
console.log(toUnderscore(12345));