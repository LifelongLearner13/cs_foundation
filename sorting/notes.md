# Sorting Algorithms

Sorting is all about organizing. No one algorithm is perfect, but an ideal one would have the following characteristics:

- Stable: Equal values are not reordered
- In-place: O(1) space complexity
- Worst-case O(n log(n)) key comparisons.
- Worst-case O(n) swaps.
- Adaptive: Speeds up to O(n) when data is nearly sorted or when there are few unique keys.

## Bubble Sort

Most straight forward of the sorting algorithms, bubble sort is similar to Insertion sort.

The algorithm compares every two adjacent items and swaps them if the first one is bigger than the second one.

Properties:

- Stable
- O(1) space complexity
- O(n^2) time complexity (for comparisons and swaps)

  - Worst and Average: O(n^2)
  - Best: O(n)

- Adaptive, becomes faster (i.e. O(n) ) when almost sorted
