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

function isRotation(str1, str2) {
	if(str1.length === str2.length) {
		return (str1 + str1).includes(str2);
	}
	
	return false;
}