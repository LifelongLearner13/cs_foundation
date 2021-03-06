/*
 * Source: CodeFights - Arcade Intro: Edge of the Ocean
 * 
 * Takeaways:
 *  - Start with a brute force approach, then try to eliminate 
 *    duplicate work
 *      - For this problem, we don't really care about the location
 *        of the zeros, just that we don't count what comes after 
 *        them in our running sum, hence a `break` is a perfect
 *        solution. 
 */

 // Time: O(n*m), where n and m represent the size of the matrix
 // Space: O(1)
function matrixElementsSum(matrix) {
  let sum = 0;

  for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
    for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
      if (matrix[rowIdx][colIdx] === 0) {
        break;
      }

      sum += matrix[rowIdx][colIdx];
    }
  }

  return sum;
}

function _nullifyColStartingAt(mat, colIdx, start) {
  for (let rowIdx = start; rowIdx < mat.length; rowIdx++) {
    mat[rowIdx][colIdx] = 0;
  }
}

// Time: O(n*m), where n and m represent the size of the matix
// Space: O(n), where n represents the number of columns
function bruteForceSolution(matrix) {
  let zeroInCol = new Array(matrix[0].length).fill(-1);
  let sum = 0;

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
      if (matrix[rowIdx][colIdx] === 0) {
        zeroInCol[colIdx] = rowIdx;
      }
    }
  }

  for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
    if (zeroInCol[colIdx] >= 0) {
      _nullifyColStartingAt(matrix, colIdx, zeroInCol[colIdx]);
    }
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let colIdx = 0; colIdx < matrix[0].length; colIdx++) {
      sum += matrix[rowIdx][colIdx];
    }
  }

  return sum;
}