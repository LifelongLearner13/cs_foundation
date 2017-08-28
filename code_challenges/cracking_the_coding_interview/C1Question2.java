package com.sierragregg.cci_c1q2;

/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 2
 * Check Permutation: Given two strings, write a method to 
 * decide if one is a permutation of the other.
 */

public class C1Question2 {
	
	/**
	 * Uses the built in Array sorting method to rearrange
	 * the characters in the provided string into accenting
	 * order.
	 * @param str String to be sorted
	 * @return String sorted in ascending order
	 */
	private static String sortString(String str) {
		char[] charArr = str.toCharArray();
		java.util.Arrays.sort(charArr);
		return new String(charArr);
	}

	/**
	 * Approach relies on the realization that a permutation on a 
	 * string consists of the characters being rearranged. It follows
	 * that string permutations must be the same length. Verify the
	 * strings are the same length, then sort both and compare the
	 * results.
	 * @param str1 String to compare
	 * @param str2 String to compare
	 * @return boolean True if the strings are permutations, false 
	 * otherwise
	 */
	public static boolean isPermutationSort(String str1, String str2) {
		if(str1.length() != str2.length()) {
			return false;
		}
		return sortString(str1).equals(sortString(str2));
	}
	
	/**
	 * Approach applies the observation that permutations contain
	 * the same character frequencies. Keep track of the character
	 * frequency in one string, then compare that against the second.
	 * This code uses an character array with a size of 128 to track
	 * character frequencies, the size assumes both strings are ASCII
	 * encoded. The approach only works because we check that both
	 * strings are the same size. If we didn't do this Str1 could have
	 * additional characters and the algorithm would return false 
	 * positives. A Hash Map/Hash Table could have been used instead
	 * of an array.
	 * @param str1 String to be compared
	 * @param str2 String to be compared
	 * @return boolean True if the strings are permutations, false 
	 * otherwise
	 */
	public static boolean isPermutationCount(String str1, String str2) {
		if(str1.length() != str2.length()) {
			return false;
		}
		
		char[] str1Arr = str1.toCharArray();
		char[] letters = new char[128]; // Assuming ASCII encoding
		
		for(char c : str1Arr) {
			letters[c]++;
		}
		
		for(int i = 0; i < str2.length(); i++) {
			int value = (int) str2.charAt(i);
			letters[value]--;
			if(letters[value] < 0) {
				return false;
			}
		}
		
		return true;
	}
}
