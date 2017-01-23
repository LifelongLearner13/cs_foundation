/*
  Problem Statement: Given a matrix of m * n elements (m rows, n columns),
  return all elements of the matrix in clockwise order.

  Solution Approach: First, consider the four directions that need to be
  traversed top, right, bottom, left. After we have visited a we can 'forget'
  about it. Instead of removing elements from array, we can use four variables
  to mark our place. We can use a fifth variables to keep track of our current
  direction.

  Source:
  * https://www.youtube.com/watch?v=siKFOI8PNKM
*/

/*
  Given a 2-D array, A, the function will return a new
  array with the contents of A in clockwise order.
*/
exports.spiralOrder = function(A){

  // Current direction, I used a string for
  // clarity, it could be a number.
  let dir = 'Top';

  // Track what has and has not be visited
  let top = 0;
  let bottom = A.length - 1;
  let left = 0;
  let right = A[0].length - 1;

  let returnArray = [];

  while (top <= bottom && left <= right) {

    if (dir === 'Top') {

      for (let i = left; i <= right; i++) {
        returnArray.push(A[top][i]);
      }
      top++;
      dir = 'Right';

    } else if (dir === 'Right') {

      for (let i = top; i <= bottom; i++) {
        returnArray.push(A[i][right]);
      }
      right--;
      dir = 'Bottom';

    } else if (dir === 'Bottom') {

      for (let i = right; i >= left; i--) {
        returnArray.push(A[bottom][i]);
      }
      bottom--;
      dir = 'Left'

    } else if (dir === 'Left') {

      for (let i = bottom; i >= top; i--) {
        returnArray.push(A[i][left]);
      }
      left++;
      dir = 'Top';
    }
  }

  return returnArray;
}
