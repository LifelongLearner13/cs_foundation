/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 4
 * Palindrome Permutation: Given a string, write a function to 
 * check if it is a permutation of a palindrome. A palindrome is 
 * a word or phrase that is the same forwards and backwards. A 
 * permutation is a rearrangement of letters. The palindrome does 
 * not need to be limited to just dictionary words.
 * Example:
 * Input: Tact Coa
 * Output:True (permutations:"taco cat","atco cta",etc.)
 * 
 * Key Observation:
 * In terms of character frequency, a palindrome can have at most one
 * character appear an odd number of times. This observation is at the
 * heart of the following solutions.
 * 
 * Things to consider:
 * Are upper and lower case letters the same when determining palindromes?
 * Do special characters, such as ' ', '?', '@', or '%' effect palindromes?
 * Does it matter if the string is already a palindrome?
 */

/**
 * Loops through string once to track character frequencies, then loops
 * through frequencies to verify their is only one odd count. Time complexity
 * is O(n) and space complexity is at worst O(n).
 * @param {string} str - String to check
 * @return {boolean} True if it is a palindrome or permutation of a palindrome
 */
function isPermPalindromeCharFreq(str) {
	let strArr = str.toLowerCase().split('');
	let charFreq = {};
	
	strArr.forEach((el) => {
	  if(el !== ' ') {
	   charFreq[el] = charFreq[el] + 1 || 1;
	  }});

	let foundOdd = false;
	for(let key in charFreq) {
		if(charFreq[key] % 2 !== 0) {
			if(foundOdd) {
				return false;
			} else {
				foundOdd = true;
			}
		}
	}
	
	return true;
}

/**
 * Reduces the two loops used in the isPermPalindromeCharFreq function
 * to one. Other than the reduced lines of code, this does not have any
 * other advantages of the former method.
 * @param {string} str - String to compare
 * @return {boolean} True if palindrome or permutation of palindrome
 */
function isPermPalindromeOneLoop(str) {
	let strArr = str.toLowerCase().split('');
	let oddCount = 0;
	strArr.forEach(el => {
		if(el !== ' ') {
			charFreq[el] = charFreq[el] + 1 || 1;
			if(charFreq[el] % 2 === 1) {
				oddCount++;
			} else {
				oddCount--;
			}
		}
	});
	
	return oddCount <= 1;
}