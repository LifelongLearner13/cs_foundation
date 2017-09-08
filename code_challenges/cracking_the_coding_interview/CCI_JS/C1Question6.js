/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 6
 * String Compression: Implement a method to perform basic string 
 * compression using the counts of repeated characters. If the "compressed" 
 * string would not become smaller than the original string, your method 
 * should return the original string. You can assume the string has only 
 * uppercase and lowercase letters (a - z).
 * Example:
 * Input: aabcccccaaa
 * Output: a2blc5a3
 */ 

/**
 * Loops through a string counting repeat adjacent characters. When a new
 * character is encountered, add the old character plus count to the compressed
 * string. Return the compressed string only when it is shorter. This method
 * uses the plus operator for concatenation; according to MDN this is the preferred
 * approach.
 * @param {string} str - String to compress
 * @return {string} The shorter of the compressed or original strings
 */
function strCompressPlus(str) {
	let comStr = '', charCount = 0;
	
	for(let i = 0; i < str.length; i++) {
		charCount++;
		
		if(i + 1 === str.length || str[i] !== str[i + 1]) {
			comStr += str[i] + charCount;
			charCount = 0;
		}
	}

	return comStr.length < str.length ? comStr : str;
}

/**
 * Loops through a string counting repeat adjacent characters. When a new
 * character is encountered, add the old character plus count to the compressed
 * string. Return the compressed string only when it is shorter. This method
 * uses the concat method, which is not the recommended method according to MDN.
 * @param {string} str - String to compress
 * @return {string} The shorter of the compressed or original strings
 */
function strCompressConcat(str) {
	let comStr = '', charCount = 0;
	
	for(let i = 0; i < str.length; i++) {
		charCount++;
		
		if(i + 1 === str.length || str[i] !== str[i + 1]) {
			comStr = comStr.concat(str[i], charCount);
			charCount = 0;
		}
	}
	
	return comStr.length < str.length ? comStr : str;
}