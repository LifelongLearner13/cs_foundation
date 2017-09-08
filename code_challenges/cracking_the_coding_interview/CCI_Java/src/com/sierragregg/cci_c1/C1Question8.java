package com.sierragregg.cci_c1;
/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 8
 * Zero Matrix: Write an algorithm such that if an element in 
 * an MxN matrix is 0, its entire row and column are set to 0.
 */
public class C1Question8 {

	/**
	 * This algorithm uses two boolean arrays to track which column and
	 * row the zero appears in. After determining the locations of the
	 * zeros, loop through and nullify the appropriate row or column.
	 * The algorithm mutates the matrix. Time complexity is O(mn) and
	 * space complexity is o(n). The space complexity could be reduced
	 * by using a bit vector.
	 * @param mat The matrix
	 */
	public static void setZeroArray(int[][] mat) {
		// Use two arrays to flag where the zeros are
		boolean[] zeroInRow = new boolean[mat[0].length];
		boolean[] zeroInCol = new boolean[mat.length];
		
		// Loop through the matrix to find zeros
		for(int col = 0; col < mat.length; col++) {
			for(int row = 0; row < mat[0].length; row++) {
				if(mat[col][row] == 0) {
					zeroInRow[col] = true;
					zeroInCol[row] = true;
				}
			}
		}
		
		// Based on the flags, nullify the appropriate rows and columns
		for(int row = 0; row < mat[0].length; row++) {
			if(zeroInRow[row]) {
				nullifyRow(mat, row);
			}
		}
		
		for(int col = 0; col < mat.length; col++) {
			if(zeroInCol[col]) {
				nullifyCol(mat, col);
			}
		}
	}
	
	/**
	 * This approach reduces the space requirement to O(1) by using the
	 * first row and column of the matrix to track where zeros appear.
	 * THis does not override any information, because the values would
	 * eventually be nullified anyway. First check if the first row and
	 * column contain a zero, set a flag if they do. Next loop through
	 * the remaining rows and columns. If a zero is found, use the first
	 * row and column to track the zeros location. Next nullify rows 1-n
	 * and columns 1-m, using the first row and column. Finally clear up
	 * by nullifying the first row and/or column if it originally contained
	 * a zero. Time complexity is O(mn) and space complexity is constant.
	 * Downside to this approach is duplicate code.
	 * @param mat The matrix
	 */
	public static void setZeroNoSpace(int[][] mat) {
		// Flags to indicate if either the first row or column contains a zero
		boolean firstRowHasZero = false;
		boolean firstColHasZero = false;
		
		for(int row = 0; row < mat[0].length; row++) {
			if(mat[0][row] == 0) {
				firstRowHasZero = true;
				break;
			}
		}
		
		for(int col = 0; col < mat.length; col++) {
			if(mat[col][0] == 0) {
				firstColHasZero = true;
				break;
			}
		}
		
		// Check the rest of the matrix for zeros, if so nullify 
		// corresponding indexes in the first row and column.
		for(int col = 1; col < mat.length; col++) {
			for(int row = 1; row < mat[0].length; row++) {
				if(mat[col][row] == 0) {
					mat[col][0] = 0;
					mat[0][row] = 0;
				}
			}
		}
		
		// Nullify rows based on values in the first column
		for(int col = 1; col < mat.length; col++) {
			if(mat[col][0] == 0) {
				nullifyRow(mat, col);
			}
		}
		
		// Nullify column based on values in the first row
		for(int row = 1; row < mat.length; row++) {
			if(mat[0][row] == 0) {
				nullifyCol(mat, row);
			}
		}
		
		if(firstRowHasZero) nullifyRow(mat, 0);
		if(firstColHasZero) nullifyCol(mat, 0);
	}
	
	/**
	 * A utility function used by both algorithms. Given a
	 * reference to a matrix and an index representing a row
	 * number, it sets all values in that row to zero.
	 * @param m The matrix
	 * @param idx Row index
	 */
	private static void nullifyRow(int[][] m, int idx) {
		for(int i = 0; i < m[0].length; i++) {
			m[idx][i] = 0;
		}
	}
	
	/**
	 * A utility function used by both algorithms. Given a
	 * reference to a matrix and an index representing a column
	 * number, it sets all values in that column to zero.
	 * @param m The matrix
	 * @param idx Column index
	 */
	private static void nullifyCol(int[][] m, int idx) {
		for(int i = 0; i < m.length; i++) {
			m[i][idx] = 0;
		}
	}
}
