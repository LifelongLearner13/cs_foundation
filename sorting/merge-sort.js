/**
 * Merge two consecutive subarrays ([lowStart, ..., lowEnd] and 
 * [lowEnd + 1, ..., highEnd]) into one array sorted in
 * accending order. 
 * @param {Array} arr The array containing the subarrays, it will
 *                      also hold the sorted content when finished 
 * @param {int} lowStart The index where the first subarray starts
 * @param {int} lowEnd The index where the first subarray ends (inclusive)
 * @param {int} highEnd The index where the second subarray ends (inclusive)
 */
function merge(arr, lowStart, lowEnd, highEnd) {
    // Creat temporary storage for the two subarrays
    let lowArray = [];
    let highArray = [];
    // Creat three index variables to keep track of
    // current position in the three arrays.
    let lowIdx; // index for lowArray
    let highIdx; // index for highArray
    let masterIdx = lowStart; // index for arr

    // Copy content to temporary arrays
    for(lowIdx = 0; masterIdx <= lowEnd; lowIdx++, masterIdx++) {
        lowArray[lowIdx] = arr[masterIdx];
    }
    for(highIdx = 0; masterIdx <= highEnd; highIdx++, masterIdx++) {
        highArray[highIdx] = arr[masterIdx];
    }

    // Reset indexes so they can be used for merging
    lowIdx = 0;
    highIdx = 0;
    masterIdx = lowStart;

    // Loop until reaching the end of one or both subarrays
    while(lowIdx < lowArray.length && highIdx < highArray.length) {
        if(lowArray[lowIdx] < highArray[highIdx]) {
            arr[masterIdx] = lowArray[lowIdx];
            lowIdx++;
        } else {
            arr[masterIdx] = highArray[highIdx];
            highIdx++;
        }
        masterIdx++;
    }

    // Add any remainder back to the original array
    while(lowIdx < lowArray.length) {
        arr[masterIdx] = lowArray[lowIdx];
        lowIdx++;
        masterIdx++;
    }
    while(highIdx < highArray.length) {
        arr[masterIdx] = highArray[highIdx];
        highIdx++;
        masterIdx++;
    }
}

/**
 * Implementation of Merge Sort. Recursively divide array
 * until reaching fewer than 2 items then merge subarrays
 * together.
 * @param {Array} arr The array to be sorted
 * @param {int} startIdx Index of the start of the subarray (inclusive)
 * @param {int} endIdx Index of the end of the subarray (inclusive)
 */
function mergeSortHelper(arr, startIdx, endIdx) {
    // Base case: subarray has fewer than 2 elements
    if (startIdx < endIdx) {

        // Find the middle index, round down if necessary
        let midIdx = Math.floor((startIdx + endIdx) / 2);

        // Recurse over the two halves
        mergeSortHelper(arr, startIdx, midIdx);
        mergeSortHelper(arr, midIdx + 1, endIdx);

        // Merge the result
        merge(arr, startIdx, midIdx, endIdx);
    }
}

/**
 * Wrapper for mergeSortHelper. Simply calls the helper
 * function with the required extra parameters
 * @param {Array} arr 
 */
function mergeSort(arr) {
    let temp = arr;
    mergeSortHelper(temp, 0, temp.length - 1);
    return temp;
}

exports.mergeSort = mergeSort;