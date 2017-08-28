/*
    Objective:
        Write an algorithm to determine if a string has all unique characters. 
        What if you cannot use additional data structures?

    Constraints:
        see notes

    Example:
        Input: 'Harry Potter'
        Output: False

        Input: 'cat'
        Output: True

    Source:
        Cracking the Coding Interview (edition 6): Chapter 1, problem 1

    Notes:
        - String encoded is important for optimizing algorith. 
          ASCII has 128 characters, Extended ASCII has 256, and 
          Unicode has 128,237.
        - If extra space is avaliable a map or array can be used
          to keep track of frequencies. A bit map can also be used
          and will take up less space than the above two options.
        - If data structures not allowed, there are two potential options.
            - Brute force: use two for loops to compare every character 
              to every other character. O(n^2)
            - If the string can be changed, or copied, then sort it and 
              compare neighbors. Best case O(n log n) and you would need to
              use a in-place sorting alorithm.  
*/