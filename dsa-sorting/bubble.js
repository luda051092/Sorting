function bubbleSort(arr) {
    // Flag to optimize the algorithm by checking if any swaps occurred
    let swapped;

    // Outer loop for each pass
    for (let i = 0; i < arr.length - 1; i++) {
        swapped = false;

        // Inner loop for each comparison
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // Compare adjacent elements
            if (arr[j] > arr[j + 1]) {
                // Swap if needed
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }
        }

        // If no swaps occurred in the inner loop, the array is already sorted
        if (!swapped) {
            break;
        }
    }

    return arr;
}

module.exports = bubbleSort;