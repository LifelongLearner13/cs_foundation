/*
## Discription: 
  - A *Divide and Conquer* based algorithm, Binary Search basically searches smaller and
  smaller sections of the memory structure until either finding the item or finishing the
  search. 
  - The algorithm requires the data structure to be sorted and elements be comparable.
  - Conventionally programmers that the lower of the two numbers when finding the middle
  of an even range. This has more to do with program languages truncating integer division
  than anything else.
  - Best when used with a simple, in-memory data structure (e.g. arrays).
  - Complexity
    - Worst Case: O(log n)
    - Average Case: O(log n)
    - Best Case: O(1)
  - Maximum number of guesses required to find element is log2 n + 1

## Algorithm:
  - Compare x with the middle element of a given range.
  - If x matches the middle element, return index or other success criteria.
  - If x is greater than the middle element, then search the right subarray for x.
  - If x is less than the middle element, then search the left subarray for x.
  
  - or

  - 1. Let min = 0 and max = n-1.
  - 2. If max < min, then stop: target is not present in array. Return -1.
  - 3. Compute guess as the average of max and min, rounded down (so that it is an integer).
  - 4. If array[guess] equals target, then stop. You found it! Return guess.
  - 5. If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
  - 6. Otherwise, the guess was too high. Set max = guess - 1.
  - 7. Go back to step 2.

## Implementation Notes:
- Used `Math.floor()` instead of the Bitwise OR operator, trade-offs: 
http://stackoverflow.com/questions/7487977/using-bitwise-or-0-to-floor-a-number
- 

## Resources:
  - Khan Academy - Algorithms
    - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array 
  - Data Science approach with examples: 
    - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/
  - Tutorial and Practice Problems
    - https://www.hackerearth.com/practice/algorithms/searching/binary-search/tutorial/
 */

// Linear implementation
function binarySearch(collection, ItemToFind) {
  let low = 0;
  let high = collection.length - 1;

  while(low <= high) {
    let midIdx = Math.floor((high + low) / 2);

    if(collection[midIdx] ===  ItemToFind) {
      return midIdx;
    }

    if(collection[midIdx] < ItemToFind) {
      low = midIdx + 1;
    } else {
      high = midIdx - 1;
    }   
  }

  return -1;
}

// Recursive implementation
function binarySearchRecursion(collection, ItemToFind) {
  binarySearchRecursionHelper(collection, ItemToFind, 0, collection.length - 1);
}

function binarySearchRecursionHelper(collection, ItemToFind, low, high) {
  if(low > high) {
    return -1;
  }

  let midIdx = Math.floor((low + high) / 2);

  if(collection[midIdx] === ItemToFind) {
    return midIdx;
  } 

  if(collection[midIdx] < ItemToFind) {
    binarySearchRecursionHelper(collection, ItemToFind, midIdx + 1, high);
  } else {
    binarySearchRecursionHelper(collection, ItemToFind, low, midIdx - 1);
  }
}

exports.binarySearch = binarySearch;
exports.binarySearchRecursion = binarySearchRecursion; 