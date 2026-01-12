class groupDifference {
    constructor(numbers) {
        this.numbers = numbers;
    }
    find(difference) {
        if (this.numbers.length === 0) return [];
        const sorted = [...this.numbers].sort((a, b) => a - b);
        const result = [];

        for (let i = 0; i < sorted.length; i++) {
            const prv = sorted[i - 1];
            const curr = sorted[i];
            const next = sorted[i + 1];
            
            if ((prv !== undefined && Math.abs(curr - prv) <= difference) || 
                (next !== undefined && Math.abs(next - curr) <= difference)) {
                result.push(curr);
                }
        }
        return result;
    }
}
const groupDiff = new groupDifference([1, 3, 6, 10, 15, 21, 28, 36]);
console.log(groupDiff.find(2));
console.log(groupDiff.find(4));
console.log(groupDiff.find(6));
console.log(groupDiff.find(10));