/*
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