function smallestDifference(arr1, arr2) {
    // Handle empty arrays
    if (arr1.length === 0 && arr2.length === 0) return -1;
    if (arr1.length === 0) return Math.min(...arr2);
    if (arr2.length === 0) return Math.min(...arr1);

    // Sort both arrays
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);

    let i = 0, j = 0;
    let minDiff = Infinity;

    // Two-pointer traversal
    while (i < arr1.length && j < arr2.length) {
        const diff = Math.abs(arr1[i] - arr2[j]);
        if (diff < minDiff) {
            minDiff = diff;
        }

        // Move the pointer of the smaller value
        if (arr1[i] < arr2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return minDiff;
}

// Test cases

console.log(smallestDifference([1, 3, 5, 23, 5], [45, 34, 67, 2, 0])); // Output: 1
console.log(smallestDifference([1, 3, 5, 23, 5], [])); // Output: 1
console.log(smallestDifference([], [])); // Output: -1