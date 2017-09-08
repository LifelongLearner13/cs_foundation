package com.sierragregg.cci_c2;

/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell Chapter 2:
 * Question 2
 * Return Kth to Last: Implement an algorithm to find the kth to last 
 * element of a singly linked list.
 * 
 * Example: 
 * 	Input: 1 -> 2 -> 7 -> 5 -> 4, 3 
 * 	Output: 7
 * 
 * Explanation: This can be approached either iteratively or recursively.
 * The main issue with any recursive solution is the extra stack space and
 * passing the right information back through the stack.
 */
public class C2Question2 {
private Node head;
	
	/**
	 * Basic implementation for a linked list node
	 */
	private class Node {

		int data;
		Node next;

		Node(int d) {
			data = d;
			next = null;
		}
	}

	C2Question2() {
		head = null;
	}

	/**
	 * Helper function for adding elements to the linked list
	 * @param num An Integer to add
	 */
	public void insertNode(int num) {
		if (head == null) {
			head = new Node(num);
			return;
		}

		Node pointer = head;
		while (pointer.next != null) {
			pointer = pointer.next;
		}

		pointer.next = new Node(num);
	}

	/* Print out the linked list
	 * @see java.lang.Object#toString()
	 */
	public String toString() {
		if (head == null) {
			return " ";
		}

		StringBuilder str = new StringBuilder();
		Node pointer = head;
		while (pointer != null) {
			str.append(pointer.data);
			str.append(" ");
			pointer = pointer.next;
		}

		return str.toString();
	}
	
	/**
	 * Wrapper function for the recursive call, this allows us
	 * to use the private Node class.
	 * @param k The kth to the last element
	 */
	public void printKthLastRecursive(int k) {
		int result = printKthLastRecHelper(head, k);
		if(k > result) {
			System.out.println("Not a valid input.");
		}
	}
	
	/**
	 * Recursive approach to find the kth to last element.
	 * Gets around the return limitation by printing the answer.
	 * One issue with this approach is it will not return anything,
	 * if k is longer than the length of the linked list.
	 * Time complexity: O(n) Space complexity: O(n^2)
	 * @param cur The current node
	 * @param k The kth to the last element
	 * @return the length of the linked list
	 */
	private int printKthLastRecHelper(Node cur, int k) {
		// Base case
		if(cur == null) {
			return 0;
		}
		
		// Increment counter, i.e. n
		int index = printKthLastRecHelper(cur.next, k) + 1;
		
		// Reached desired position
		if(index == k) {
			System.out.println(k + "th to last node is " + cur.data);
		}
		
		return index;
	}
	
	// Helper class, to store the state of an index
	// so we don't have to return it via the call
	// stack.
	private class Index {
		public int value = 0;
	}
	
	/**
	 * Wrapper function for the 2nd recursive approach.
	 * Creates a new index, then starts the recursion.
	 * @param k
	 * @return the kth from the last node or null if it does not exist
	 */
	public Node KthLastRecursive(int k) {
		Index idx = new Index();
		return kthLastRecursiveHelper(head, k, idx);
	}
	
	/**
	 * Uses an internal class to track the state of the index variable
	 * so the node can be passed back through the call stack.
	 * Time complexity: O(n) Space complexity: O(n)
	 * @param cur The current node in the linked list
	 * @param k How far from the end to look
	 * @param idx Where the function is currently
	 * @return The kth from last node or null
	 */
	private Node kthLastRecursiveHelper(Node cur, int k, Index idx) {
		// Base case
		if(cur == null) {
			return null;
		}
		
		// Recurse until we reach the end of the linked list
		Node next = kthLastRecursiveHelper(cur.next, k, idx);
		
		// Once we have reached the end, start incrementing as
		// start working our way back
		idx.value = idx.value + 1;
		
		if(idx.value == k) {
			return cur;
		}
		
		return next;
	}
	
	/**
	 * Iterative solution is longer, but doesn't require extra class
	 * to track state.
	 * Time complexity: O(n) Space complexity: O(1)
	 * @param k the kth to last element index
	 * @return the kth to last node
	 */
	public Node kthLastIterative(int k) {
		Node runner = head;
		Node cur = head;
		
		// Move runner k nodes ahead
		for(int i = 0; i < k; i++) {
			// K is greater than the size of the linked list
			if(runner == null) {
				return null;
			}
			
			runner = runner.next;
		}
		
		// Move both pointers at the same speed. When runner reaches
		// the end of the list, cur will be at the right spot.
		while(runner != null) {
			runner = runner.next;
			cur = cur.next;
		}
		
		return cur;
	}
}
