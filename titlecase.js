function titleCase(title, minorWords) {
    if (!title) return "";
    let words = title.toLowerCase().split(" ");
    let minorSet = new Set(
        minorWords ? minorWords.toLowerCase().split(" ") : []
    );

    return words
        .map((word, index) => {
            if (index === 0 || !minorSet.has(word)) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            }
            return word;
        })
        .join(" ");
}
console.log(titleCase('a clash of KINGS', 'a an the of'));
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
console.log(titleCase('the quick brown fox'));