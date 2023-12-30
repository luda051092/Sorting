
// Helper function to get the digit at the given place value
function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

// Helper function to determine the number of digits in a given number
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// Main radixSort function 
function radixSort(arr) {
    // Find maximum number of digits in the array
    const maxDigits = Math.max(...arr.map(digitCount));

    // Iterate through each digit place (from rightmost to leftmost)
    for (let k = 0; k < maxDigits; k++) {
        // Create buckets for each digit
        const buckets = Array.from({ length: 10 }, () => []);

        // Distribute elements into buckets based on current digit place
        for (let i = 0; i < arr.length; i++) {
            const digit = getDigit(arr[i], k);
            buckets[digit].push(arr[i]);
        }

        // Flatten buckets and update array
        arr = [].concat(...buckets);
    }

    return arr;
}

module.exports = radixSort;