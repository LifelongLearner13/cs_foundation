function insertionSort(numArr) {
    let key;
    let j;
    for(let i = 1; i < numArr.length; i++) {
        // Must store the current key (aka, the element needing to be sorted)
        // in a variable so we don't override it when sliding elements to the right
        key = numArr[i];
        // The portion of the array to the left of the key is already sorted
        j = i - 1;
        // While key is smaller than the current element to its left, slide element to the right
        while(j >= 0 && numArr[j] > key) {
            numArr[j + 1] = numArr[j];
            j--;
        }
        numArr[j + 1] = key;
    }
    return numArr;
}

exports.insertionSort = insertionSort;
