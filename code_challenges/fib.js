/*
    Naive recursive version. Takes O(n) space due 
    to the number of functions on the call stack. 
    The time complexity is approximately O(2^n) 
    because each call to 'fibRecNaive' takes O(n); 
    this is a lose bound for a discussion on how
    to calculate the tight bound see: 
    http://courses.csail.mit.edu/6.01/spring07/lectures/lecture4.pdf
*/
function fibRecNaive(n) {
    if (n <= 1) {
        return n
    }

    return fibonacci(n - 1) + fibonacci(n - 2)
}

/* 
    An iterative approach that uses an array to store
    previous values. Since we are using an array, the
    space complexity is O(n), but the time complexity
    is approximately O(n).
*/
function fibIterStor(n) {
    let fibs = [1, 1];
    for(let i = 2; i <= n; i++) {
        fibs.append(fibs[i - 1] + fibs[i - 2]);
    }
    return fibs[n];
}

/* 
    Yet another iterative implementation. This time
    we only keep track of the last two values.
    Space complexity is O(1) and time complexity is
    O(n).
*/
function fibIterNoStor(n) {
  let a = 1, b = 0, temp;

  while (n > 0){
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}

/* 
    The recursive implementation of 'fibIterNoStor',
    relies on ES6's tail recursion optimization in
    order to have O(n) space complexity. The time
    complexity is still O(n).
    In order for the optimization to happen use
    the '--harmony --use_strict' flags.
    For an explanation of tail recursion optimization
    see: http://benignbemine.github.io/2015/07/19/es6-tail-calls/
*/
function fibRecNoStorHelper(n, a, b) {
  if (n === 0) {
    return b;
  } else {
    return fibRecNoStorHelper(n-1, a + b, a);
  }
};

function fibRecNoStor(n){
  return fibRecNoStorHelper(n, 1, 0);
}