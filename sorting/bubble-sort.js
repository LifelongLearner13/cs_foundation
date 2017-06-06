// Uses Destruction instead of a temp variable
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function bubbleSort(arr) {
  let swapped;
  // Compare every element with its neighbor
  for(let i = 0; i < arr.length; i++) {
    swapped = false;
    for(let j = 0; j < arr.length - i - 1; j++) {
      // If larger than right neighbor, swap
      if(arr[j] > arr[j + 1]) {
        swap(arr, j, j+1);
        swapped = true;
      }
    }

    // Improvement, if the inner loop did not make any changes
    // break out of the outer loop.
    if (!swapped) {
      break;
    }
  }

  return arr;
}

function bubbleSortWhile(arr) {
  // Same as above, except with a do-while
  let swapped;
  do {
    swapped = false
    // Compare every element with its neighbor
    for(let i = 0; i < arr.length - 1; i++) {
      // If larger than right neighbor, swap
      if(arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
        swapped = true
      }
    }
  } while(swapped)

  return arr;
}

function bubbleSortRecursive(arr) {
  // Yet another implementation.
  // No advantage to the recursive solution.
  return bubbleSortRecursiveHelper(arr, arr.length);
}

function bubbleSortRecursiveHelper(arr, endIndex) {
  // Base Case: array of length 1 is always sorted
  if(endIndex === 1) {
    return arr;
  }

  // Bubble the largest in subarray to the right
  for(let i = 0; i < endIndex - 1; i++) {
    if(arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }

  // Sort subarray
  return bubbleSortRecursiveHelper(arr, endIndex - 1);
}

exports.bubbleSort = bubbleSort;
exports.bubbleSortWhile = bubbleSortWhile;
exports.bubbleSortRecursive = bubbleSortRecursive;
