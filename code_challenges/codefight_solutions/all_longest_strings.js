/*
 * Source: CodeFights - Arcade Intro: Smooth Sailing
 * 
 * Takeaways:
 *  - Used a greedy approach, but could have used
 *    a combination of `Math.max` and `Array.filter`
 */

// Time: O(n)
// Space: O(1)
function allLongestStrings(inputArray) {
  if(inputArray.length <= 1) {
      return inputArray;
  }
  
  // Greedy: First string in list is longest
  let maxArray = [inputArray[0]];
  // Created for convenience and to increase readability
  let maxSoFar = inputArray[0].length;
  
  // Loop through elements 1-n of the array
  for(let i = 1; i < inputArray.length; i++) {
      // If We find a string bigger than our max,
      //    delete array and start new one with 
      //    new max length string
      if(inputArray[i].length > maxSoFar) {
          maxArray = [inputArray[i]]
          maxSoFar = inputArray[i].length;
      
      // Else if string is same size as current max
      //    add it to the array
      } else if(inputArray[i].length === maxSoFar) {
          maxArray.push(inputArray[i]);
      }
  }
  
  return maxArray;
}
