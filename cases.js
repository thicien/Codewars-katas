function changeCase(identifier, targetCase) {
    if (identifier === "") return "";
    if (!["camel", "snake", "kebab"].includes(targetCase)) {
        return undefined;
    }
    const hasUnderscore = identifier.includes("_");
    const hasDash = identifier.includes("-");
    const hasUpper = /[A-Z]/.test(identifier);

    if ((hasUnderscore && hasDash) ||
        (hasUpper && (hasUnderscore || hasDash))) {
        return undefined;
    }

    let words;

    if (hasUpper) {
        words = identifier
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()
            .split(" ");
    }
    else if (hasUnderscore) {
        if (!/^[a-z_]+$/.test(identifier)) return undefined;
        words = identifier.split("_");
    }
    else if (hasDash) {
        if (!/^[a-z-]+$/.test(identifier)) return undefined;
        words = identifier.split("-");
    }
    else {
        words = [identifier];
    }

    if (targetCase === "camel") {
        return words
            .map((w, i) =>
                i === 0 ? w : w[0].toUpperCase() + w.slice(1)
            )
            .join("");
    }
    if (targetCase === "snake") {
        return words.join("_");
    }
    if (targetCase === "kebab") {
        return words.join("-");
    }
}
console.log(changeCase("snakeCase", "snake"));
console.log(changeCase("some-lisp-name", "camel"));
console.log(changeCase("map_to_all", "kebab"));
console.log(changeCase("doHTMLRequest", "kebab"));
console.log(changeCase("invalid-inPut_bad", "kebab"));
console.log(changeCase("valid-input", "huh???"));
console.log(changeCase("", "camel"));













