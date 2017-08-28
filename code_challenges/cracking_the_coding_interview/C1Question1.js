/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 1
 * Is Unique: Implement an algorithm to determine if a string has 
 * all unique characters. What if you cannot use additional data structures?
 */

/**
 * This approach assumes ASCII (i.e. 128 characters). This assumption isn't truly
 * necessary with Javascript, but is a critical part in other languages. Another
 * difference is the use of an object, where a simple array would be a better choice
 * in another language. Time complexity is O(n), space complexity is O(n) at worst.
 * @param str String to check for unique characters
 * @param true if string is unique, false otherwise
 */
function isUniqueCharsArr(str) {
	if(str.length > 128) {
		return false;
	}
	
	let charFreq = {};
	for(let i = 0; i < str.length; i++) {
		if(charFreq[str[i]]) {
			return false;
		} else {
			charFreq[str[i]] = 1;
		}
	}
	
	return true;
}

/**
 * Included for completeness, this approach compares every character
 * to every other character. Time complexity is O(n^2) and space
 * complexity is O(1).
 * @param str String to check for uniqueness
 * @return True if string has unique characters, false otherwise
 */
function isUniqueCharBruteForce(str) {
	for(let i = 0; i < str.length; i++) {
		for(let j = i + 1; j < str.length; j++) {
			if(str[i] === str[j]) {
				return false;
			}
		}
	}
	
	return true;
}

/**
 * Basic insertion sort implementation
 * @param arr Array to be sorted
 * @return sorted array
 */
function insertionSort(arr) {
	for(let i = 1; i < arr.length; i++) {
		let key = arr[i];
		let sorted = i - 1;
		
		while(sorted >= 0 && key < arr[i]) {
			arr[sorted + 1] = arr[sorted];
			sorted--;
		}
		
		arr[sorted + 1] = key;
	}
	
	return arr;
}

/**
 * This approach does not require extra space. By sorting
 * characters in the string, we can determine uniqueness
 * by comparing each character with its neighbor. Time
 * complexity is O(n) in best case, O(n^2) worst, because
 * of the sorting algorithm. 
 */
function isUniqueCharSorted(str) {
	let arr = insertionSort(str.split(''));
	for(let i = 0; i < arr.length - 1; i++) {
		if(arr[i] === arr[i + 1]) {
			return false;
		}
	}
	
	return true;
}