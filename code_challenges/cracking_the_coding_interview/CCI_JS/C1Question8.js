/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 8
 * Zero Matrix: Write an algorithm such that if an element in 
 * an MxN matrix is 0, its entire row and column are set to 0.
 */

/**
 * Uses separate arrays to track whether a zero appears in a
 * column or row. Time complexity is O(n^2) and the space
 * complexity is O(n).
 * @param {number[][]} mat - N x M dimensional matrix
 */
function setZerroArray(mat) {
	let zeroInRow = new Array(mat[0].length);
	let zeroInCol = new Array(mat.length);
	
	// Look for zeros in the matrix and store indexes when
	// appropriate
	for(let colIdx = 0; colIdx < mat.length; colIdx++) {
		for(let rowIdx = 0; rowIdx < mat[0].length; rowIdx++) {
			if(mat[colIdx][rowIdx] === 0) {
				zeroInCol[colIdx] = true;
				zeroInRow[rowIdx] = true;
			}
		}
	}

	for(let rowIdx = 0; rowIdx < mat[0].length; rowIdx++) {
		if(zeroInRow[rowIdx]) {
			nullifyRow(mat, rowIdx);
		}
	}
	
	for(let colIdx = 0; colIdx < mat.length; colIdx++) {
		if(zeroInCol[colIdx]) {
			nullifyCol(mat, colIdx);
		}
	}
	
}

/**
 * Helper function to change every element in a row to zero.
 * @param {number[][]} mat - Matrix
 * @param {number} idx - Index of the row to be nullified
 */
function nullifyRow(mat, idx) {
	for(let rowIdx = 0; rowIdx < mat[0].length; rowIdx++) {
		mat[idx][rowIdx] = 0;
	}
}

/**
 * Helper function to change every element in a column to zero.
 * @param {number[][]} mat - Matrix
 * @param {number} idx - Index of column to be nullified
 */
function nullifyCol(mat, idx) {
	for(let colIdx = 0; colIdx < mat.length; colIdx++) {
		mat[colIdx][idx] = 0;
	}
}

/**
 * Uses the first row and column of the matrix to track whether 
 * a zero appears in that row or column. Time complexity is O(n^2) 
 * and the space complexity is constant.
 * @param {number[][]} mat - N x M dimensional matrix
 */
function setZeroNoSpace(mat) {
	let zeroInFirstRow = false
	let zeroInFirstCol = false;
	
	// Check first column and row for zeros before we
	// start overwriting them
	for(let colIdx = 0; colIdx < mat.length; colIdx++) {
		if(mat[colIdx][0] === 0) {
			zeroInFirstCol = true;
			break;
		}
	}
	
	for(let rowIdx = 0; rowIdx < mat[0].length; rowIdx++) {
		if(mat[0][rowIdx] === 0) {
			zeroInFirstRow = true;
			break;
		}
	}
	
	// Look for zeros in the rest of the matrix
	for(let colIdx = 1; colIdx < mat.length; colIdx++) {
		for(let rowIdx = 1; rowIdx < mat[0].length; rowIdx++) {
			if(mat[colIdx][rowIdx] === 0) {
				mat[colIdx][0] = 0;
				mat[0][rowIdx] = 0;
			}
		}
	}
	
	// Nullify column based on values in the first row
	for(let rowIdx = 1; rowIdx < mat.length; rowIdx++) {
		if(mat[0][rowIdx] === 0) {
			nullifyCol(mat, rowIdx);
		}
	}
	
	// Nullify rows based on values in the first column
	for(let colIdx = 1; colIdx < mat.length; colIdx++) {
		if(mat[colIdx][0] === 0) {
			nullifyRow(mat, colIdx);
		}
	}
	
	// If we found zeros in either the first row or column, nullify them
	if(zeroInFirstRow) nullifyRow(mat, 0);
	if(zeroInFirstCol) nullifyCol(mat, 0);
}