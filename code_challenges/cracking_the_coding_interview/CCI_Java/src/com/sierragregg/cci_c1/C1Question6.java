package com.sierragregg.cci_c1;

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
public class C1Question6 {
	
	/**
	 * Given a string compress it by replacing duplicate characters with their 
	 * frequency. Although the basic premise is sound, this algorithm's running
	 * time can be improved. The running time for this approach is O(n + k^2)
	 * where n is the length of the input string and k is the number of pairs,
	 * comprised of character and number, that are added to compressedStr. Do this
	 * way string concatenation is costly. I think the space complexity is O(n)
	 * where n is the size of the original string. At most compressedStr will
	 * be 2 times the length of the original since we drop constants this would be
	 * need O(n) space.
	 * @param str The string to be compressed
	 * @return Either a compressed version of the input string or the original string
	 * depending on which one is shorter  
	 */
	public static String strCompressBad(String str) {
		String compressedStr = "";
		int charCount = 0;
		
		for(int i = 0; i < str.length(); i++) {
			charCount++;
			
			// The first test is only true on the last character, this ensures
			// it it is added to the compressed string. When the first condition
			// is true it short-circuits the "or" meaning the second part does not
			// cause a index out of bounds error.
			// Overall the "if" checks whether the next character is the same
			// as the current one.
			if(i + 1 == str.length() || str.charAt(i) != str.charAt(i + 1)) {
				
				// The empty string is used to cause an implicit type conversion
				compressedStr += "" + str.charAt(i) + charCount++;
				charCount = 0;
			}
		}
		
		// Return the shorter of the two strings
		return str.length() > compressedStr.length() ? compressedStr : str; 
	}
	
	/**
	 * This approach uses StringBuilder to reduce the runtime complexity.
	 * Internally StringBuilder uses a dynamic array so on average insertions
	 * cost O(1). By avoiding direct string concatenation, the runtime of this
	 * approach is O(n). The rest of the algorithm is the same as strCompressBad.
	 * @param str String to be compressed
	 * @return The shorter of the compressed string or original
	 */
	public static String strCompressOneLoop(String str) {
		StringBuilder compressedStr = new StringBuilder();
		int charCount = 0;
		
		for(int i = 0; i < str.length(); i++) {
			charCount++;
			
			// Overall the "if" checks whether the next character is the same
			// as the current one.
			if(i + 1 == str.length() || str.charAt(i) != str.charAt(i + 1)) {
				compressedStr.append(str.charAt(i));
				compressedStr.append(charCount);
				charCount = 0;
			}
		}
		
		return str.length() > compressedStr.length() ? compressedStr.toString() : str;
	}
	
	/**
	 * Basically the same approach as the first two algorithms, except this utilizes
	 * a short-circuit test. Determine the final size of the compressed string, if
	 * the original string is shorter immediately return it. Although this approach
	 * eliminates the need to create a string in the case that we return the original,
	 * it does have duplicate code.
	 * @param str The string to be compressed
	 * @return Smaller string, either the original or a compressed version
	 */
	public static String strCompressOpt(String str) {
		int finalLen = countCompressLen(str);
		if(finalLen >= str.length()) {
			return str;
		}
		
		StringBuilder compressedStr = new StringBuilder();
		int charCount = 0;
		for(int i = 0; i < str.length(); i++) {
			charCount++;
			
			// Overall the "if" checks whether the next character is the same
			// as the current one.
			if(i + 1 == str.length() || str.charAt(i) != str.charAt(i + 1)) {
				compressedStr.append(str.charAt(i));
				compressedStr.append(charCount);
				charCount = 0;
			}
		}
		
		return compressedStr.toString();
	}
	
	private static int countCompressLen(String str) {
		int charCount = 0;
		int compressLen = 0;
		
		for(int i = 0; i < str.length(); i++) {
			charCount++;
			
			if(i + 1 == str.length() || str.charAt(i) != str.charAt(i + 1)) {
				
				// String.valueOf is used in case charCount goes beyond 
				// single digits
				compressLen += 1 + String.valueOf(charCount).length();
				charCount = 0;
			}
		}
		
		return compressLen;
	}
}
