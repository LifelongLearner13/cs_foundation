"""
    Several algorithms to compute the fibonnacci sequence.
    Code examples from:
    http://courses.csail.mit.edu/6.01/spring07/lectures/lecture4.pdf
    and
    http://www.python-course.eu/recursive_functions.php
"""

def fib_rec_naive(num):
    """
        This naive algorithm has
        approximately O(2^n) time complexity
        and O(n) space complexity.
    """
    if num == 0 or num == 1:
        return num
    else:
        return fib_rec_naive(num - 1) + fib_rec_naive(num - 2)

def fib_iter_stor(num):
    """
        An iterative approach that uses an array to
        keep tack of previously calculated values.
        Time complexity is O(n) and space complexity
        is O(n) due to the use of an array.
        Note: depending on the language, appending to
        an array may incure extra cost. In Python
        appending is a constant operation.
    """
    fibs = [1, 1]

    for i in range(2, num + 1):
        fibs.append(fibs[i - 1] + fibs[i - 2])

    return fibs[num]

def fib_iter_no_stor(num):
    """
        An iterative approach that only takes O(1)
        space complexity. The time complexity is
        O(n). Unless a hack is added the recursive
        counterpart to this algorithm will have
        O(n) space complexity because Python
        does not support tail recursion
        optimization.
    """
    one_step_ago, two_steps_ago, value = 1, 0, 0

    for _ in range(2, num + 1): # '_' indicates an unused loop counter
        value = one_step_ago + two_steps_ago
        one_step_ago, two_steps_ago = value, one_step_ago

    return value
