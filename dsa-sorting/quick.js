/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1){
    const pivotValue = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (arr[i] < pivotValue) {
            pivotIndex++;
            // Swap arr[i] with the element at pivotIndex
            [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
        }
    }

    // Swap pivotValue with the element at pivotIndex
    [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];

    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Get the pivot index using the pivot helper function
        const pivotIndex = pivot(arr, left, right);

        // Recursively sort the left and right halves
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }

    return arr;
}

module.exports = quickSort;