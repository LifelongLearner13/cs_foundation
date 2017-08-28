/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 7
 * Rotate Matrix: Given an image represented by an NxN 
 * matrix, where each pixel in the image is 4 bytes, write a 
 * method to rotate the image by 90 degrees. Can you do this in place?
 */

function rotate90dCW(mat) {
	if(mat.length === 0 || mat.length !== mat[0].length) {
		return false;
	}
	
	let length = mat.length;
	
	// Loop through each layer, outermost first
	for(int layer = 0; layer < length/2; layer++) {
		let first = layer;
		let last = length - 1 - layer;
		
		for(let i = first; i < last; i++) {
			let offset = i - first;
			let top = mat[first][i];
			
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