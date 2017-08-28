/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 2
 * Check Permutation: Given two strings, write a method to 
 * decide if one is a permutation of the other.
 */


/**
 * Sort the strings then compare the result. Although this
 * approach is superior when it comes to readability. It could
 * be slower do to the operations of splitting, sorting, and
 * rejoining.
 * @param str1 String to compare
 * @param str2 String to compare
 * @return True if the two strings are permutations, false otherwise
 */
function isPermutationSort(str1, str2) {
	if(str1.length !== str2.length) {
		return false;
	}
	
	return str1.split('').sort().join() === str2.split('').sort().join();
}


/**
 * Use an object to track the character frequencies.
 * Although longer in terms of lines, this approach
 * potentially uses less space. The charFreq object
 * will only store the unique characters in str1, as
 * opposed to the Java implementation which defines a 
 * 128 element char array. By using the object, the
 * second loop can be terminated early if str2 contains
 * a character not found in str1.
 * @param str1 String to compare
 * @param str2 String to compare
 * @return True if the two strings are permutations, false
 * otherwise
 */
function isPerumtationCount(str1, str2) {
	if(str1.length !== str2.length) {
		return false;
	}
	
	let charFreq = {};
	
	for(let i = 0; i < str1.length; i++) {
		if(charFreq[str1[i]]) {
			charFreq[str1[i]]++;
		} else {
			charFreq[str1[i]] = 1;
		}
	}

	for(let i = 0; i < str2.length; i++) {
		if(charFreq[str2[i]]) {
			charFreq[str2[i]]--;
			if(charFreq[str2[i]] < 0) {
				return false;
			}
		} else {
			return false;
		}
	}

	return true;
}