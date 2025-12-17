function separateLiquids(glass) {
    if (glass.length === 0) return glass;
    const density = {
        'H': 1.36, 
        'W': 1.00,
        'A': 0.87, 
        'O': 0.80  
    };
    const rows = glass.length;
    const cols = glass[0].length;
    const liquids = glass.flat();
    liquids.sort((a, b) => density[a] - density[b]);
    let result = [];
    let index = 0;
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < cols; c++) {
            row.push(liquids[index++]);
        }
        result.push(row);
    }
    return result;
}
const glass = [
  ['H', 'H', 'W', 'O'],
  ['W', 'W', 'O', 'W'],
  ['H', 'H', 'O', 'O']
];
console.log(separateLiquids(glass));