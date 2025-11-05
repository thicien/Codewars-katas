function numberToLetters(n) {
    const numbers = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    function toWord(num) {
        if (num === 0) return 'zero';
        return String(num).split('').map(digits => numbers[Number(digits)]).join('');
    }
    const result = [];
    let current = n;
    while (true) {
        const word = toWord(current);
        result.push(word);
        const nextNumber = word.length;
        const nextWord = toWord(nextNumber);
        if (nextWord === word) continue;
        current = nextNumber;
    }
    return result;
}
console.log(numbersOfLetters(65));
console.log(numbersOfLetters(4));
console.log(numbersOfLetters(8));

