function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;

        // Move elements of arr that are greater than currentVal
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Place currentVal at its correct position
        arr[j + 1] = currentVal;
    }

    return arr;
}

module.exports = insertionSort;