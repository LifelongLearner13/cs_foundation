"""
    Algorithms to find the Greatest Common Divisor
    of positive integers.
    Sources:
        https://codereview.stackexchange.com/questions/95521/gcd-using-euclid-algorithm
        https://softwareengineering.stackexchange.com/questions/212719/what-is-the-big-o-cpu-time-of-euclids-algorithm-of-greatest-common-divisor-of
"""

def gcd_rec(a, b):
    """
        Recursive approach using Euclid's algorithm.
        Since Python does not optimize tail recursion
        this is not efficient in terms of space
    """
    if b > a:
        return gcd_rec(b, a)

    if a % b == 0:
        return b

    return gcd_rec(b, a % b)

def gcd_iter(a, b):
    """
        Iterative solution.
    """
    while b:
        a, b = b, a % b
    return a
