/*
    Objective:
        Given a string, write an algorithm to find the 
        first non repeating character in it.

    Constraints:
        Spaces do not count
        Assume standard ASCII

    Example:
        Input: ' tutorial horizon'
        Output: 'u'

        Input: 'aabbccadd'
        Output: -1

    Source:
        http://algorithms.tutorialhorizon.com/find-the-first-non-repeating-character-in-a-given-string/
*/

/**
 * Return the first non repeating character in string.
 * Spaces do not count. Returns -1 if all characters
 * repeat.
 * Worst time complexity O(n)
 * Worst space complexity of O(n).
 * @param {string} str 
 */
function firstNonReptChar(str) {
    arrStr = str.replace(' ', '');
    charFreq = {};

    for(let i = 0; i < arrStr.length; i++) {
        let currentChar = arrStr[i];
        charFreq[currentChar] = charFreq[currentChar] ? charFreq[currentChar]++ : 1;
    }

    for(let i = 0; i < arrStr.length; i++) {
        let currentChar = arrStr[i];
        if(charFreq[currentChar] === 1) {
            return currentChar;
        }
    }

    return -1;
}