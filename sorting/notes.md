# Sorting Algorithms

Sorting is all about organizing. No one algorithm is perfect, but an ideal one would have the following characteristics:

- Stable: Equal values are not reordered
- In-place: O(1) space complexity
- Worst-case: O(n log(n)) key comparisons (optimal worst case for comparision based sorting).
- Worst-case: O(n) swaps.
- Adaptive: Speeds up to O(n) when data is nearly sorted or when there are few unique keys.

## Bubble Sort

Most straight forward of all the sorting algorithms; bubble sort is similar to Insertion sort. 

The algorithm compares every two adjacent items and swaps them if the first one is bigger than the second one. Basically, large elements *bubble up* to the right of the collection.

Impractical for modern programing, Bubble sort only excels when the data set is small and nearly sorted. However, Insertion sort is nearly always a better choice under such circumstances.

Properties:

- Stable
- Time Complexity
  - Worst and average O(n^2)
    - Worst case occurs when array is reverse sorted. 
  - best O(n)
    - Best case occurs when array is sorted    
- Space complexity O(1)
- O(n^2) comparisons and swaps
- Adaptive, becomes faster (i.e. O(n) ) when almost sorted

### Sources:
- [Friday Algorithms: JavaScript Bubble Sort](http://www.stoimen.com/blog/2010/07/09/friday-algorithms-javascript-bubble-sort/)
- [GeeksforGeeks Bubble Sort](http://www.geeksforgeeks.org/bubble-sort/)
- [What is a bubble sort good for?](http://stackoverflow.com/questions/276113/what-is-a-bubble-sort-good-for)

## Selection Sort

Starting with the first element, find the smallest element in the collection and swaps it with the current element. With each min element found we narrow the unsorted subarray by 1; with everything to the left of the current element in sorted order.

Selection sort minimizes swaps, so consider using it when cost of swapping elements is high (e.g. writing to memory).

Properties:
- Not stable, elements are swapped with themselves
- Time complexity
  - Worst, best, and average O(n^2) 
- Space complexity O(1)
- O(n^2) comparisons
- O(n) swaps
- Not adaptive

### Sources:
- [GeeksforGeeks Selection Sort](http://www.geeksforgeeks.org/selection-sort/)
- [toptal Selection Sort](https://www.toptal.com/developers/sorting-algorithms/selection-sort)
- [Computer science in JavaScript: Selection sort](https://www.nczonline.net/blog/2009/09/08/computer-science-in-javascript-selection-sort/)

## Insertion Sort

Conseptually similar to sorting a hand of cards, Insertion sort starts with the 2nd element comparing it to its left neighbor, if it's less than it's neighbor they are swapped. This process continues for every non-sorted element in the right subcollection. While it is being sorted a value is know as the *key*. Some implementations swap the key with every value that is greater than it, others slide the higher values to the right making room for the key.

Alough it has a high average and worst case runtime, Insertion sort is widely considered a good sorting algorithm for small data sets (because of its low overhead) or nearly sorted data sets (because it is adaptive). Insertion sort is commonly used as a recursive base case for divide-and-conquer sorting algorithms, like Quick sort.

Properties:
- Stable
- Time complexity
  - Worst and average O(n^2)
  - Best O(n)
- Space complexity O(1)
- O(n^2) comparisons and swaps
- Adaptive: O(n) time when nearly sorted
- Very low overhead

### Sources:
- [toptal Insertion Sort](https://www.toptal.com/developers/sorting-algorithms/insertion-sort)
- [Khan Academy Insertion Sort](https://www.khanacademy.org/computing/computer-science/algorithms/insertion-sort/a/analysis-of-insertion-sort)
- [GeeksforGeeks Insertion Sort](http://www.geeksforgeeks.org/insertion-sort/)

## Merge Sort
A divide and conqure algorithm which relies on the observation that a collection of less than two elements is always sorted. Basically, the algorithm divides the collection in half until reaching less than two elements, then merges the sorted subcollections together. The merge is linear; copy the sorted subcollections into new temporary variables, then continue to take the smallest element from either temporary collection and add it back into the original collection until reaching the end of one or both of the temorary subcollections. If there are elements left in one of the temporary collections add them to the end of the original.

Merge sort is the ideal choice when stability is required, dealing with linked lists, and when random access is expensive (i.e. external sorting on tape).

Properties:
- Stable
- Time Complexity: Θ(nlog(n)) for best, average, and worst
- Space Complexity
  - O(n) for arrays
  - O(log(n)) for linked lists
- Not adaptive
- Does not require random access to data

### Sources:
[toptal Merge Sort](https://www.toptal.com/developers/sorting-algorithms/merge-sort)
[GeeksforGeeks Merge Sort](http://www.geeksforgeeks.org/merge-sort/)

## Quick Sort
Another divide and conqure algorithm. Like merge sort, recursion is used to break collection into subcollections of size 0 or 1 (merge sort will always have subcollections of size 1 but quick sort can have either). Unlike merge sort, quick sort accompishes its work during the divide portion of the algorithm. Start by choosing a **pivot** element from the collection, then rearrange the rest of the elements so the ones less than the pivot are to its left and the ones greater than the pivot are to its right. Once done recurse (i.e. repeate the process) on the left and right sizes of the collection exclusing the pivot element. 

Position of the pivot has significant impact on running time. Choosing the right most or left most element as the pivot is easy to code, but will degrade to O(n^2) given sorted on nearly sorted collections. Other choices have their own pros and cons. Common choices for pivot include: left most, right most, random using built-in methods, random with custom method, or middle. 

Although merge sort has a *better* worst case time complexity, quick sort typically outperforms merger sort and significantly outperforms insertion and selection sort.

Properties:
- Not stable
- Time complexity (Depends heavely on implementation)
  - Best and average O(nlog(n))
  - Worst O(n^2) 
- Space complexity O(lg(n)) (Depends on implementation)
- Not adaptive

### Sources:
- [GeeksforGeeks QuickSort](http://www.geeksforgeeks.org/quick-sort/)
- 

## Additional Resources:
[Sorting Algorithms Animations](https://www.toptal.com/developers/sorting-algorithms/)