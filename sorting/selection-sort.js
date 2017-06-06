// Uses Destruction instead of a temp variable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        // Set min as the first element in current subarray
        let minIndex = i;
        let minValue = arr[minIndex];

        // Loop through subarray and find the minimum
        for(let j = i + 1; j < arr.length; j++) {
            if(minValue > arr[j]) {
                minIndex = j;
                minValue = arr[minIndex];
            }
        }

        // Once we have found the minimum for the subarray
        // swap with current 
        swap(arr, i, minIndex);
    }
}

exports.selectionSort = selectionSort;