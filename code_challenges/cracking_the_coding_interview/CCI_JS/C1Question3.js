/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 3
 * URLify: Write a method to replace all spaces in a string with 
 * '%20' You may assume that the string has sufficient space at 
 * the end to hold the additional characters, and that you are 
 * given the "true" length of the string. (Note: if implementing 
 * in Java, please use a character array so that you can perform 
 * this operation in place.)
 * Example
 * Input: “Mr John Smith      " 13 
 * Output: "Mr%20John%20Smith"
 */

/**
 * Reimplementation of the Java algorithm. This approach converts the string
 * to an array, then steps to the array counting the spaces. Using the extra
 * space provided at the end of the array, we change rearrange the characters
 * to make room for '%20'. Not an ideal solution for Javascript.
 * @param str - String to remove spaces from
 * @param trueLength - True length of the string, not including extra white 
 * space at the end
 * @return encoded string
 */
function replaceSpacesLength(str, trueLength) {
	let strArr = str.split('');
	let spaceCount = 0, i = 0, index;
	
	for(i; i < trueLength; i++) {
		if(str[i] === ' ') {
			spaceCount++;
		}
	}
	
	if(trueLength < strArr.length) {
		str[trueLength] = '\0'; // End the String
	}
	
	// spaceCount is multiplied by 2 because the space for the
	// character '%' is already accounted for in trueLength,
	// therefore we only need to add room for twice the extra 
	// characters.
	index = trueLength + (spaceCount * 2);
	for(i = trueLength - 1; i >= 0; i--) {
		if(strArr[i] == ' ') {
			strArr[index - 1] = '0';
			strArr[index - 2] = '2';
			strArr[index - 3] = '%';
			index = index - 3;
		} else {
			strArr[index - 1] = str[i];
			index--;
		}
	}
	
	return strArr.join();
}

/**
 * The following approach uses a built in function to replace
 * space with '%20'. This approach will only work in this circumstance.
 * @param str - String to encode
 * @return encoded string
 */
function replaceSpacesEncodeURI(str) {
	return encodeURIComponent(str.trim());
}

/**
 * A more general approach, using built-in functions. 
 * @param str - String to encode
 * @return Encoded string
 */
function replaceSpacesReplaceBuiltIn(str) {
	return str.trim().replace(/ /g, '%20');
}