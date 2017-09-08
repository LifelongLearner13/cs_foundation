/**
 * Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.


 */
function commonCharacterCount(s1, s2) {
  let hash = {},
      count = 0;
  
  for(let char of s1) {
    hash[char] = ++hash[char] || 1;
  }
  
  for(let char of s2) {
    if(hash[char]-- > 0) {
      count++;
    }
  }
  
  return count;
}