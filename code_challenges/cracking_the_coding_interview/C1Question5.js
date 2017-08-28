/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 5
 * One Away: There are three types of edits that can be performed 
 * on strings: insert a character, remove a character, or replace a 
 * character. Given two strings, write a function to check if they 
 * are one edit or zero edits) away.
 * Example:
 * Input: pale, pie 
 * Output: true 
 * 
 * Input: pales, pale 
 * Output: true
 * 
 * Input: pale, bale
 * Output: true 
 * 
 * Input: pale, bae
 * Output: false
 * 
 * Key Observations:
 * Start with the length of the strings. If it is a replacement, both will have 
 * the same length. If it is an insertion or deletion, then one of the string 
 * will be shorter by one character.
 */

/**
 * Separates checking for an edit into two cases, a character replacement or 
 * addition/subtraction. Time complexity is O(n) and space complexity is O(n).
 * Although it's readability is high, it's maintainability is low.
 * @param {string} str1 - String to compare
 * @param {string} str2 - String to compare
 * @return {boolean} True if the two strings are one edit away
 */
function isOneEditSeperate(str1, str2) {
	if(str1.length === str2.length) {
		return isReplacement(str1, str2);
	}
	
	if(str1.length - 1 === str2.length) {
		return isOneDifferent(str1, str2);
	}
	
	if(str2.length - 1 === str1.length) {
		return isOneDifferent(str2, str1);
	}
}

/**
 * Checks if strings, of the same length, are different
 * by at most one character.
 * @param {string} str1 - String to compare
 * @param {string} str2 - String to compare
 * @return {boolean} True if the two strings are at most
 * one character different
 */
function isReplacement(str1, str2) {
	let foundDiff = false;
	
	for(let i = 0; i < str1.length; i++) {
		if(str1[i] !== str2[i]) {
			if(foundDiff) {
				return false;
			}
			
			foundDiff = true;
		}
	}
	
	return true;
}

/**
 * Determines longer string is different than the shorter string 
 * by at most one character.
 * @param {string} longer - Longer string to compare
 * @param {shorter} shorter - Shorter string to compare
 * @return {boolean} True if longer is the same as shorter if at
 * most one character is removed, false otherwise
 */
function isOneDifferent(longer, shorter) {
	let idxL = 0;
	let idxS = 0;
	
	while(idxS < storter.length && idxL < longer.length) {
		if(shorter[idxS] !== longer[idxL]) {
			if(idxS !== idxL) {
				return false;
			}
			idxL++;
		} else {
			idxS++;
			idxL++;
		}
	}
	
	return true;
}

/**
 * Compact implementation of the isOneEditSeperate approach.
 * Checks both replacements, additions, and removals in one
 * loop.
 * @param {string} str1 - String to compare
 * @param {string} str2 - String to compare
 * @return {boolean} True if the strings are one edit away, false otherwise
 */
function isOneEditCombined(str1, str2) {
	if(Math.abs(str1.length - str2.length) > 1) {
		return false;
	}
	
	let longer = str1.length > str2.length ? str1 : str2;
	let shorter = str2.length < str1.length ? str2 : str1;
	
	let idxL = 0, idxS = 0, foundDiff = false;
	
	while(idxS < shorter.length && idxL < longer.length) {
		if(shorter[idxS] !== longer[idxL]) {
			if(foundDiff) {
				return false;
			}
			
			foundDiff = true;
			
			// If the lengths are the same, then the difference
			// is a replacement, increment both strings.
			if(shorter.length === longer.length) {
				idxS++;
			}
		} else {
			idxS++;
		}
		
		// Whether there is a difference or not longer string
		// needs to be incremented.
		idxL++;
	}
}