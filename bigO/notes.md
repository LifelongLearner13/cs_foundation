# Big O

## Definition (IC)

Big O notation is the language we use for articulating how long an algorithm takes to run. It's how we compare the efficiency of different approaches to a problem.

In other words, how quickly an algorithm grows relative to its input, as the input gets arbitrarily large.

Let's break that down:

- 'how quickly the runtime grows'

  - Some external factors affect the time it takes for a function to run: the speed of the processor, what else the computer is running, etc. So it's hard to make strong statements about the exact runtime of an algorithm. Instead we use big O notation to express how quickly its runtime grows.

- 'relative to the input'

  - Since we're not looking at an exact number, we need something to phrase our runtime growth in terms of. We use the size of the input. So we can say things like the runtime grows "on the order of the size of the input" (O(n)) or "on the order of the square of the size of the input" (O(n^2)).
  - 'as the input gets arbitrarily large'
  - Our algorithm may have steps that seem expensive when n is small but are eclipsed eventually by other steps as n gets huge. For big O analysis, we care most about the stuff that grows fastest as the input grows, because everything else is quickly eclipsed as n gets very large. If you know what an asymptote is, you might see why "big O analysis" is sometimes called "asymptotic analysis."

### From Data Structures and Algorithms

One of the simplest ways to think about big-O analysis is that it is basically a way to apply a rating system to your algorithms (like movie ratings). It tells you the kind of resource needs you can expect the algorithm to exhibit as your data gets bigger and bigger. From best (least resource requirements ) to worst, the rankings are: O(1), O(log n), O(n), O(n log n), O( n^2 ), O(n^3), O(2^n).

In summary, when we are looking at big-O, we are in essence looking for a description of the growth rate of the resource increase. The exact numbers do not actually matter in the end.

## Big 0, Big Theta (θ), and Big Omega (Ω) (CCI pg 60)

- Academics use big O, big theta, and big omega to describe runtimes.

  - Big O: In academia, big O describes an upper bound on the time. An algorithm that prints all the values in an array could be described as O(N), but it could also be described as O(N^2), O(N^3), or 0(2N) (or many other big O times). The algorithm is at least as fast as each of these; therefore they are upper bounds on the runtime. This is similar to a **less-than-or-equal-to** relationship. If Bob is X years old (I'll assume no one lives past age 130), then you could say X ≤ 130\. It would also be correct to say that X ≤ 1,000 or X ≤ 1,000,000\. It's technically true (although not terribly useful). Likewise, a simple algorithm to print the values in an array is O(N) as well as O(N^3) or any runtime bigger than O(N).
  - Big Omega: In academia, omega is the equivalent concept but for lower bound. Printing the values in an array is O(N) as well as O(log N) and 0(1). After all, you know that it won't be faster than those runtimes.
  - Big Theta: In academia, theta means both big O and big omega. That is, an algorithm is 0(N) if it is both O(N) and 0(N). 0 gives a tight bound on runtime.

In industry (and therefore in interviews), people seem to have merged big O and big theta together. Industry's meaning of big O is closer to what academics mean by big theta, in that it would be seen as incorrect to describe printing an array as O(N^2). Industry would just say this is O(N).

## Best, Worst, and Average Case (CCI pg 51)

- Let's look at this from the perspective of quick sort.

  - Quick sort picks a random element as a "pivot" and then swaps values in the array such that the elements less than pivot appear before elements greater than pivot. This gives a "partial sort:'Then it recursively sorts the left and right sides using a similar process.

- Best Case: If all elements are equal, then quick sort will, on average, just traverse through the array once. This is O(N). (This actually depends slightly on the implementation of quick sort. There are implementations, though, that will run very quickly on a sorted array.)

- Worst Case: What if we get really unlucky and the pivot is repeatedly the biggest element in the array? (Actually, this can easily happen. If the pivot is chosen to be the first element in the subarray and the array is sorted in reverse order, we'll have this situation.) In this case, our recursion doesn't divide the array in half and recurse on each half. It just shrinks the subarray by one element. This will degenerate to an O(N^2) runtime.

- Expected Case: Usually, though, these wonderful or terrible situations won't happen. Sure, sometimes the pivot will be very low or very high, but it won't happen over and over again. We can expect a runtime of O(N log N).

- We rarely ever discuss best case time complexity, because it's not a very useful concept. After all, we could take essentially any algorithm, special case some input, and then get an O(1) time in the best case.

- For many-probably most-algorithms, the worst case and the expected case are the same. Sometimes they're different, though, and we need to describe both of the runtimes.

- What is the relationship between best/worst/expected case and big Theta/omega? It's easy for candidates to muddle these concepts (probably because both have some concepts of "higher", "lower" and "exactly right"), but there is no particular relationship between the concepts.

  - **_Best, worst, and expected cases describe the big O (or big theta) time for particular inputs or scenarios_**.
  - **_Big 0, big omega, and big theta describe the upper, lower, and tight bounds for the runtime_**.

## Space Complexity vs Time Complexity

We usually consider big O in terms of time complexity (not really time because we cannot calculate that but esitmate it in terms of operations), however the definition of big O mentions resources, which can include space, instructions, time ...

Here is an example using recursion that is has O(n) space complexity and O(n) time complexity.

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

- [Big O Notation](https://www.interviewcake.com/article/java/big-o-notation-time-and-space-complexity) From Interview Cake (in Evernote)
- Cracking the Coding Interview 6th edition
- [Data Structures and Algorithms in C++](https://cathyatseneca.gitbooks.io/data-structures-and-algorithms/content/analysis/notations.html)
