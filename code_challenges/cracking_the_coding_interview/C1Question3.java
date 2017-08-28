package com.sierragregg.cci_c1q3;

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
public class C1Question3 {
	
	/**
	 * Replaces spaces in a character array with the characters %20.
	 * First traverse the array from left to right in order to count
	 * the number of spaces, then traverse from right to left
	 * inserting %20 or moving a character when appropriate.
	 * This approach relies on being given the true length of the
	 * string and extra space at the end of the char array.
	 * @param str Character array holding the string
	 * @param trueLength The length of the string excluding extra
	 * 		  spaces at the end
	 */
	public static void replaceSpacesLength(char[] str, int trueLength) {
		int spaceCount = 0, index, i = 0;
		
		for(i = 0; i < trueLength; i++) {
			if(str[i] == ' ') {
				spaceCount++;
			}
		}
		
		if(trueLength < str.length) {
			str[trueLength] = '\0'; // End the String
		}
		
		// spaceCount is multiplied by 2 because the space for the
		// character '%' is already accounted for in trueLength,
		// therefore we only need to add room for twice the extra 
		// characters.
		index = trueLength + (spaceCount * 2);
		for(i = trueLength - 1; i >= 0; i--) {
			if(str[i] == ' ') {
				str[index - 1] = '0';
				str[index - 2] = '2';
				str[index - 3] = '%';
				index = index - 3;
			} else {
				str[index - 1] = str[i];
				index--;
			}
		}
	}
	
	public static void replaceSpacesNoLength(char[] str) {
		int spaceCount = 0, index, i = 0;
		
		for(i = 0; i < str.length; i++) {
			if(str[i] == ' ') {
				spaceCount++;
			}
		}
		
		// i now holds the true length of the string
		i--;
		while(str[i] == ' ') {
			spaceCount--;
			i--;
		}
		
		// Find the new length for the array
	    index = i + (spaceCount * 2) + 1;
		
		if(index < str.length) {
			str[index] = '\0'; // End the String
		}
		
		for(i = i; i>= 0; i--) {
			if(str[i] == ' ') {
				str[index - 1] = '0';
				str[index - 2] = '2';
				str[index - 3] = '%';
				index = index - 3;
			} else {
				str[index - 1] = str[i];
				index--;
			}
		}
	}
	
	public static void main(String[] args) {
		char[] test = "Mr John Smith      ".toCharArray();
		replaceSpacesNoLength(test);
		System.out.println("Final: " + new String(test));
	}
}
