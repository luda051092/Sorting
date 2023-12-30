function merge(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Merge arrays while both have elements
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        }   else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1, if any
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2, if any
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const leftHalf = mergeSort(arr.slice(0,middle));
    const rightHalf = mergeSort(arr.slice(middle));

    return merge(leftHalf, rightHalf);
}

module.exports = { merge, mergeSort};