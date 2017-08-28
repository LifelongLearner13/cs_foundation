package com.sierragregg.cci_c1q7;
/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 7
 * Rotate Matrix: Given an image represented by an NxN 
 * matrix, where each pixel in the image is 4 bytes, write a 
 * method to rotate the image by 90 degrees. Can you do this in place?
 */
public class C1Question7 {
	
	/**
	 * The 2D matrix is divided into layers. The values are rotated by layer.
	 * Time complexity is O(n^2) and the algorithm does require some extra
	 * space. The algorithm mutates the original matrix.
	 * @param mat The 2D matrix to rotate
	 * @return true if the matrix was rotated, false otherwise
	 */
	public static boolean rotate90dCW(int[][] mat) {
		
		// Matrix must be square
		if(mat.length == 0 || mat.length != mat[0].length) return false;
		
		int length = mat.length;
		
		// Loop through each layer, outermost first
		for(int layer = 0; layer < length/2; layer++) {
			int first = layer;
			int last = length - 1 - layer;
			
			for(int i = first; i < last; i++) {
				int offset = i - first;
				int top = mat[first][i];
				
				// top <- left
				mat[first][i] = mat[last - offset][first];
				
				// left <- bottom
				mat[last - offset][first] = mat[last][last - offset];
				
				// bottom <- right
				mat[last][last - offset] = mat[i][last];
				
				// right <- top
				mat[i][last] = top;
			}
		}
		
		return true;
	}
}
