package com.sierragregg.cci_c1;

/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell
 * Chapter 1: Question 9
 * StringRotation: Assume you have a method isSubstring which checks
 * if one word is a substring of another. Given two strings, s1 and s2, 
 * write code to check if s2 is a rotation of s1 using only one call to 
 * isSubstring
 * 
 * Example:
 * Input: "waterbottle" "erbottlewat"
 * Output: True
 * 
 * Explanation:
 * For s2 to be a rotation of s1, s1 can be split into two substrings which 
 * when rearranged forms s2. We can refer to these two pieces as x and y. So,
 * s1 = xy and s2 = yx. From this we see that s2 is a substring of s1s1.
 */
public class C1Question9 {
	
	/**
	 * Easy, if not the most efficient, test to see if sub is a substring
	 * of main. Lower casing both strings is done because contains is case
	 * sensitive.
	 * @param main Parent string
	 * @param sub Potential substring
	 * @return True if sub is a substring of main, false otherwise
	 */
	private static boolean isSubstring(String main, String sub) {
		if(main.length() < sub.length()) return false;
		main = main.toLowerCase();
		sub = sub.toLowerCase();
		return main.contains(sub);
	}
	
	/**
	 * This algorithm relies on the observation that if s2 is
	 * a rotation of s1 it will also be a substring of s1 + s1.
	 * The runtime depends on the implementation of isSubstring.
	 * If isSubstring is O(A+B), where A and B are the length of
	 * the strings, then isRotation has a runtime of O(n).
	 * @param s1 Original string
	 * @param s2 potential substring
	 * @return True if s2 is a rotation of s1, false otherwise
	 */
	public static boolean isRotation(String s1, String s2) {
		int lenS1 = s1.length();
		
		// Sanity check
		if(s2.length() == lenS1 && lenS1 > 0) {
			
			String s1s1 = s1 + s1;
			return isSubstring(s1s1, s2);
			
		}
		
		return false;
	}
}
