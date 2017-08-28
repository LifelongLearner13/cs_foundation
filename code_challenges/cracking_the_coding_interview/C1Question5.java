package com.sierragregg.cci_c1q5;

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
public class C1Question5 {
	
	/**
	 * Separates the problem into two alternatives. If the strings are the same
	 * length, tests to see if there is a replacement. If their lengths are different
	 * by one, tests for a deletion. Insertion is the reverse of deletion so we lump
	 * them together. Time complexity is O(n) where n is the length of the smaller 
	 * string; space is constant. This approach has
	 * the advantage that it is easy to read, but the separate functions may cause
	 * maintainability issues.
	 * @param str1 First string to compare
	 * @param str2 Second string to compare
	 * @return boolean True if the strings have at most one difference, insertion, 
	 * deletion, or replacement, false otherwise
	 */
	public static boolean isOneEditSeperate(String str1, String str2) {
		if(str1.length() == str2.length()) {
			return isReplacement(str1, str2);
		} 
		
		if(str1.length() - 1 == str2.length()) {
			return isOneDifferent(str1, str2);
		}
		
		if(str2.length() - 1 == str1.length()) {
			return isOneDifferent(str2, str1);
		}
		
		return false;
	}
	
	/**
	 * Helper function for isOneEditSeperate. Scans two equal length strings
	 * to determine if there is at most one different character.
	 * @param str1 First string to compare
	 * @param str2 Second string to compare
	 * @return boolean True if there is at most one difference, false otherwise
	 */
	private static boolean isReplacement(String str1, String str2) {
		boolean foundDifference = false;
		
		for(int i = 0; i < str1.length(); i++) {
			if(str1.charAt(i) != str2.charAt(i)) {
				if(foundDifference) {
					return false;
				}
				
				foundDifference = true;
			}
		}
		
		return true;
	}
	
	/**
	 * Helper function for isOneEditSeperate. Scans two strings differing in length 
	 * by one. If the strings are equal when one character is removed from the longer,
	 * then the function returns true. Parameter order is important.
	 * @param longer The longer of the two strings to compare
	 * @param shorter The shorter of the two strings to compare
	 * @return True if the strings differ by at most one character, false otherwise
	 */
	private static boolean isOneDifferent(String longer, String shorter) {
		int idxLong = 0, idxShort = 0;
		
		while(idxLong < longer.length() && idxShort < shorter.length()) {
			if(longer.charAt(idxLong) != shorter.charAt(idxShort)) {
				if(idxLong != idxShort) {
					return false;
				}
				idxLong++;
			} else {
				idxLong++;
				idxShort++;
			}
		}
		
		return true;
	}
	
	/**
	 * Similar idea to isOneEditSeperate, except this method checks both
	 * alternatives, replacement and deletion, in one loop. Time complexity
	 * is O(n) where n is the length of the smaller string; space is 
	 * constant. Although harder to read, this approach has the advantage 
	 * of higher maintainability due to its concise nature.
	 * @param str1 First string to compare
	 * @param str2 Second string to compare
	 * @return True if there is at most one difference between the strings,
	 * false otherwise
	 */
	public static boolean isOneEditCombined(String str1, String str2) {
		if(Math.abs(str1.length() - str2.length()) > 1) {
			return false;
		}
		
		String longer = str1.length() > str2.length() ? str1 : str2;
		String shorter = str2.length() < str1.length() ? str2 : str1;
		
		int idxLong = 0, idxShort = 0;
		boolean foundDifference = false;
		
		while(idxLong < longer.length() && idxShort < shorter.length()) {
			if(longer.charAt(idxLong) != shorter.charAt(idxShort)) {
				if(foundDifference) { // Have we already found one difference?
					return false;
				}
				
				foundDifference = true;
				
				// If characters are different and same length, both idxShort and 
				// idxLong need to be incremented. If they are not the same length,
				// skip over the character by only incrementing idxLong.
				if(longer.length() == shorter.length()) {
					idxShort++;
				}

			} else {
				idxShort++; // No Difference increment both indexes
			}
			idxLong++;
		}
		
		return true;
	}
}
