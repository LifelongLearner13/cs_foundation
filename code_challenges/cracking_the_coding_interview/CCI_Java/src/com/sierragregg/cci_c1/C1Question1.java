package com.sierragregg.cci_c1;

/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 1
 * Is Unique: Implement an algorithm to determine if a string has 
 * all unique characters. What if you cannot use additional data structures?
 */
public class C1Question1 {
	
	
	/**
	 * Uses a Boolean array to keep track of whether a character has been
	 * seen before. The each position in the array represents a character 
	 * in the alphabet. The array is set to the size of the alphabet, e.g. 
	 * ASCII 128 or extended ASCII 256. Time complexity is O(c) and space complexity is O(c) 
	 * where c is the number of characters in the alphabet.
	 * @param str The string to be checked for unique characters
	 * @return boolean True if the string contains all unique characters
	 * false otherwise
	 */
	public static Boolean isUniqueCharsArr(String str) {
		if(str.length() > 128) {
			return false;
		}
		
		boolean[] seen = new boolean[128];
		for(int i = 0; i < str.length(); i++) {
			int charVal = str.charAt(i);
			if(seen[charVal]) {
				return false;
			}
			seen[charVal] = true;
		}
		
		return true;
	}
	
	/**
	 * Uses a bit vector as a way of keeping track of seen characters.
	 * Like isUniqueCharsArr, this method matches each digit in the bit
	 * vector with a letter in the alphabet. This approach reduces the 
	 * space complexity by 8.
	 * @param str The string to be checked for unique characters
	 * @return boolean True if the string contains all unique characters 
	 * false otherwise
	 */
	public static Boolean isUniqueCharsBit(String str) {
		int checker = 0;
		
		for(int i = 0; i < str.length(); i++) {
			int val = str.charAt(i) - 'a';
			
			if((checker & (1 << val)) > 0) {
				return false;
			}
			
			checker |= (1 << val);
		}
		
		return true;
	}
	
	/**
	 * The brute force approach checks every character against every 
	 * other character. This has a time complexity of O(n^2), but a
	 * space complexity of O(1). The constant space is the big advantage
	 * of this approach.
	 * @param str The string to be checked for unique characters
	 * @return boolean True if the string contains all unique characters 
	 * false otherwise
	 */
	public static Boolean isUniqueCharsBruteForce(String str) {
		if(str.length() > 128) {
			return false;
		}
		
		for(int i = 0; i < str.length(); i++) {
			char currentChar = str.charAt(i);
			
			for(int j = i + 1; j < str.length(); j++) {
				if(currentChar == str.charAt(j)) {
					return false;
				}
			}
		}
		
		return true;
	}
	
	/**
	 * Quick and dirty implementation of Insertion Sort.
	 * There are faster sorting algorithms, but most of the really fast
	 * ones use data structures.
	 * Time complexity is O(n^2) and space complexity is O(1).
	 * @param arr Character array, representing the string to be sorted
	 * @return char[] sorted array in ascending order
	 */
	private static char[] sort(char[] arr) {
		for(int i = 1; i < arr.length; i++) {
			char key = arr[i];
			int j = i - 1;
			
			while(j >= 0 && arr[j] > key) {
				arr[j + 1] = arr[j];
				j--;
			}
			
			arr[j + 1] = key;
		}
		
		return arr;
	}
	
	/**
	 * Sorts the string using Insertion sort, then checks adjacent
	 * characters to see if they match.
	 * Time complexity is O(n^2) and space complexity is O(1).
	 */
	public static Boolean isUniqueCharsSort(String str) {
		char[] charArr = sort(str.toCharArray());
		
		for(int i = 1; i < str.length(); i++) {
			if(charArr[i - 1] == charArr[i]) {
				return false;
			}
		}
		
		return true;
	}

}
