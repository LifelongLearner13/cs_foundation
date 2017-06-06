# Greedy Algorithms

## Characteristics
- Good strategy for optimization problems
- Problem can be broken into subproblems, at each step there is an optimal (greedy) choice. When combined these choices comprise the answer.
- Formally, this can be broken down into:
    - Greedy-choice property: A global optimum can be arrived at by selecting a
local optimum.
    - Optimal substructure: An optimal solution to the problem contains an
optimal solution to subproblems.

### Pros
- Simple to conceive and write
- Analysing runtime is usually straight forward

### Cons
- Difficult to prove correctness of approach
- Most greedy algorithms are not correct

## General Strategy
- Make a greedy choice
- Prove that it is a safe choice
- Reduce to a subproblem
- Solve subproblem

### Safe Move
- A move is *safe* if it will lead to an optimum solution
    - Not All first and greedy moves are *safe*

### Subproblem
- Similar problem but of a smaller size

## Examples
- Activity Selection problem
- Fractional Knapsack problem
- Scheduling problem
- Aproximating Traveling Salesman
- [Additional examples and code on GeeksforGeeks](http://www.geeksforgeeks.org/greedy-algorithms-set-1-activity-selection-problem/)

## Sources:
- [CS Department Rochester: C16-greedy.pdf](https://www.cs.rochester.edu/~gildea/csc282/slides/C16-greedy.pdf)
- [Greedy Introduction](http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Greedy/greedyIntro.htm)
- [Basics of Greedy Algorithms](https://www.hackerearth.com/practice/algorithms/greedy/basics-of-greedy-algorithms/tutorial/)
- Algorithmic Toolbox: Week 3 by University of California on Coursera