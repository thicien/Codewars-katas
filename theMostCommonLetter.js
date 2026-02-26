function replaceCommon(string, letter) {
  //good luck
    let count = {}
    let findIndex = {}
    for(let i = 0; i < string.length; i++) {
        let character = string[i];
        if(character !== " ") {
            count[character] = (count[character] || 0) + 1;
            if(findIndex[character] === undefined) {
                findIndex[character] = i;
            }
        }
    }
    let mostCommon = "";
    let maxCommon = 0;
    let earliestIndex = Infinity;
    for(let character in count) {
       if(count[character] > maxCommon || count[character] === maxCommon && findIndex[character] < earliestIndex) {
           mostCommon = character;
           maxCommon = count[character];
           earliestIndex = findIndex[character];
       }   
    }
    return string.split(mostCommon).join(letter);
}