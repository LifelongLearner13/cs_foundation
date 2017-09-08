package com.sierragregg.cci_c1;

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
public class C1Question4 {

	/**
	 * Check is a given string is a permutation of a palindrome.
	 * Uses an array to store character frequencies, then scans the
	 * array to verify that at most one character appeared an odd number
	 * of times. This solution does not differentiate between upper and
	 * lower characters, it also does not consider special characters at
	 * all. Time complexity is O(n) and space complexity is O(26), or O(1).
	 * @param str The String to check
	 * @return True if it is or could be a palindrome, false otherwise
	 */
	public static boolean isPermPalindromeNumVal(String str) {
		int[] freqTable = buildCharFrequency(str);
		return checkMaxOneOdd(freqTable);
	}
	
	/**
	 * Given an array representing character frequencies, check if there
	 * is at most one odd number.
	 * @param freq Array of character frequencies
	 * @return boolean True if there is at most one odd number, false 
	 * otherwise 
	 */
	private static boolean checkMaxOneOdd(int[] freq) {
		boolean isOddChar = false;
		for(int count: freq) {
			if(count % 2 != 0) {
				if(isOddChar) {
					return false;
				}
				isOddChar = true;
			}
		}
		return true;
	}
	
	/**
	 * Character.getNumericValue is basically like parseInt.
	 * For example, Character.getNumericValue('5') would return 5.
	 * The exception is a-z and A-Z witch both map to 10 - 35.
	 * Given a character this function returns a value between 0 and 25
	 * or -1 for non-alphabetic characters.
	 */
	private static int getCharNumber(Character c) {
		int a = Character.getNumericValue('a');
		int z = Character.getNumericValue('z');
		int val = Character.getNumericValue(c);
		if(a <= val && val <= z) {
			return val - a;
		} else {
			return -1;
		}
	}
	
	/**
	 * Given a string, determine character frequency. Only alphabet 
	 * characters are considered and case does not matter.
	 * @param str String to be considered
	 * @return An array containing frequencies
	 */
	private static int[] buildCharFrequency(String str) {
		int[] freq = new int[Character.getNumericValue('z') - 
		                 Character.getNumericValue('a') + 1];
		for(char c: str.toCharArray()) {
			int temp = getCharNumber(c);
			if(temp != -1) {
				freq[temp]++;
			}
		}
		return freq;
	}
	
	/**
	 * This approach inspired by 
	 * http://www.geeksforgeeks.org/check-given-string-rotation-palindrome/
	 * takes into consideration special characters, except space.
	 * This will take around O(n) time and has constant space.
	 */
	public static boolean isPermPalindromeCharArray(String str) {
		int[] freq = new int[128]; // Assuming ASCII
		for(char c: str.toLowerCase().toCharArray()) {
			if(c != ' ') {
				freq[c]++;
			}
		}

		boolean isOddChar = false;
		for(int val: freq) {
			if(val % 2 != 0) {
				if(isOddChar) {
					return false;
				}
				isOddChar = true;
			}
		}
		return true;
	}

	/**
	 * Similar to isPerPermPalindromeNumVal, except one loop is used to count
	 * frequency and keep track of any odd numbers. In terms of time or space
	 * complexity this does not have any advantages over the previous implementation.
	 * It does reduce the number of lines of code. Like the first implementation,
	 * the algorithm is case-insensitive and does not consider special characters.
	 * @param str The string to check for a Palindrome
	 * @return true if the provided string is a permutation of a palindrome, false
	 * otherwise
	 */
	public static boolean isPermPalindromeOneLoop(String str) {
		int[] table = new int[Character.getNumericValue('z') - 
		                Character.getNumericValue('a') + 1];
		int oddCount = 0;
		for(char c: str.toCharArray()) {
			int charVal = getCharNumber(c);
			if(charVal != -1) {
				table[charVal]++;
				if(table[charVal] % 2 == 1) {
					oddCount++;
				} else {
					oddCount--;
				}
			}
		}

		return oddCount <= 1;
	}
	
}
