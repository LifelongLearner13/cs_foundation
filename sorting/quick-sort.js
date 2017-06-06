// Uses Destruction instead of a temp variable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function partition(arr, startIdx, endIdx) {
    pivot = arr[endIdx];

    // Index points to the end of the subarray
    // containing the elements less than the pivot
    let endOfLT = startIdx - 1;

    // Traverse from startIdx to one minus endIdx (i.e. the element to the 
    // left of the pivot)
    for(let endOfGT = startIdx; endOfGT <= endIdx - 1; endOfGT++) {
        if(arr[endOfGT] <= pivot) {
            endOfLT++;
            swap(arr, endOfGT, endOfLT);
        }
    }

    // When done swap the pivot element with the left most
    // element in the Greater than partition
    swap(arr, endOfLT + 1, endIdx);

    return endOfLT + 1;
}

function quickSort(arr, low = 0, high = arr.length - 1) {
    if(low < high) {
        let pivot = partition(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high);
        
        return arr;
    }
}

exports.quickSort = quickSort;