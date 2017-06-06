# Big O

## Definition

Rating system used to compare the efficiency or memory use of a algorithm. In 
other words, Big O discribes how quickly an algorithm's resource needs grows relative 
to its input, as the input gets arbitrarily large.

### Definition Breakdown

- *How quickly an algorithm's runtime grows*
  - Because computing enviroments can be drastically different, from the speed of 
    the processor to the current number of running tasks, it's hard to calculate
    runtimes for an algorithms. Instead of using exact numbers, Big O "aproximates"
    (i.e. applies asymptotes to) how quickly runtime will grow.

- *Relative to the input size*
  -  Big O phrases runtime growth in terms of input size. For example O(n^2)
     can be read as, "On the order of the square of the size of the input"

- *as the input gets arbitrarily large*
  - Although some algorithms preform well with small input sizes, others only shine
    when given large data sets. In Big O analysis we generally care about how the
    algorithm will perform when given large inputs. 

### Common Big O values from best (e.g. smallest overall resource need) to worst:
- O(1)
- O(log n)
- O(n)
- O(n log n)
- O( n^2 )
- O(n^3)
- O(2^n)

## Big 0, Big Theta (θ), and Big Omega (Ω)

- Academics group resource requirement analysis into three catagories: big O, 
  big theta, and big omega
  - **Big O**: Describes the upper bound on the resource requirement (e.g. time). 
    Basically this equates to a *less-than-or-equal-to* relationship, i.e. the
    actual resource requirement on any computer will be less-than-or-equal-to the 
    stated Big O resource requirement. For example, the Big O runtime of printing 
    an array is O(n), but it is equally correct to state the runtime as O(n^2), 
    O(n^3) or anyother runtime bigger than O(n). 
  - **Big Omega**: Describes the lower bound on an algorithm's resource requirement.
    This is basically equivalent to the *greater-than-or-equal-to* relationship, i.e.
    the actual resource requirment on any computer will be greater-than-or-equal-to the
    stated Big Omega resource requirment. For example, the Big Omega runtime of printing
    the values in an array is Ω(N), but it is equally correct to state the runtime as Ω(log N), Ω(1), or anyother runtime less than Ω(n).
  - **Big Theta**: Describes the tight bound on the resource requirement (i.e. both big O and
    big omega). This Basically equates to an *equal-to* relationship. An algorithm is 
    θ(n) only if it is also O(n) and Ω(n).

## Industry's approach

In general, Industry only has one type of resource requirement analysis, Big O. Their
definition for Big O is a combination of Academia's Big O and Big Theta. For example,
Industry considers O(n) as the only accurate analysis for printing an array.

## Best, Worst, and Average Case (CCI pg 51)

  - **Best, worst, and expected cases describe the big O (or big theta) time for particular inputs or scenarios**
  - **Big 0, big omega, and big theta describe the upper, lower, and tight bounds for the runtime**
  
  For example, the best case for quick sort occurs when all elements are equal, with most
  most implementations, this results in a best case runtime of O(n). However, if the
  collection is sorted in reverse order, we get a worse case runtime of O(n^2). Both of these
  are particular cases and do not discribe the average, or expected, runtime. For the most
  part we only care about worst and expected runtimes. These two types are usually, but not
  always, the same.

## Space Complexity vs Time Complexity

We usually consider big O in terms of time complexity (not really time because we cannot calculate that but esitmate it in terms of operations), however the definition of big O mentions resources, which can include space, instructions, time ...

Here is an example using recursion that has O(n) space complexity and O(n) time complexity.

```java
int sum(int n) {
  if (n <= 0) {
    return 0;
  return n + sum(n-1);
}
```

Each call adds a level to the stack.

sum(4) -> sum(3) -> sum(2) -> sum(l) -> sum(0)

This only counts if the calls exist on the call stack at the same time.

## Calculating Big O

### Drop the Constants

Big O just describes the rate of increase. For this reason, we drop the constants in runtime. Big O allows us to express how the runtime scales. We just need to accept that it doesn't mean that O(N) is always better than O(N^2).

### Drop the Non-Dominant Terms

You should drop the non-dominant terms.

- O(N^2 + N) becomes O(N^2).
- O(N + log N) becomes O(N).
- O(5*2^N + 1000N^100 ) becomes O(2^N).

We might still have a sum in a runtime. For example, the expression O(B^2 + A) cannot be reduced (without some special knowledge of A and B).

### Multi-Part Algorithms: Add vs. Multiply

- If your algorithm is in the form "do this, then, when you're all done, do that" then you add the runtimes.
- If your algorithm is in the form "do this for each time you do that"then you multiply the runtimes.

```java
/* Add the runtimes: O(A + B) */
for (int a : arrA) {
  print(a);
}
for (int b : arrB) {
  print(b);
}

/* Multiply the runtimes: O(AB) */
for (int a : arrA) {
  for (int b : arrB) {
    print(a + "," + b);
  }
}
```

In the first example, we do A chunks of work then B chunks of work. Therefore, the total amount of work is O(A + B). In the second example, we do B chunks of work r each element in A.Therefore, the total amount of work isO(A * B).

### Log N Runtime

What is **k** in the expression 2k = N? This is exactly what log expresses. 2^4 = 16 -> log(2)16 = 4 log(2)N = k -> 2^k = N

When you see a problem where the number of elements in the problem space gets halved each time, that will likely be a O(log N) runtime. This is the same reason why finding an element in a balanced binary search tree is O(log N). With each comparison, we go either left or right. Half the nodes are on each side, so we cut the problem space in half each time.

What's the base of the log? The short answer is that it doesn't matter for the purposes of big O.

### Recursive Runtimes

When you have a recursive function that makes multiple calls, the runtime will often (but not always) look like O(branches^depth), where branches is the number of times each recursive call branches. In this case, this gives us O(2^N).

As you may recall, the base of a log doesn't matter for big O since logs of different bases are only different by a constant factor. However, this does not apply to exponents. The base of an exponent does matter. Compare 2^N and 8^N. If you expand 8^N, you get (2^3)^N, which equals 2^3N, which equals 2^2N * 2^N. As you can see, 8^N and 2^N are different by a facctor of 2^2N.

## Sources:
