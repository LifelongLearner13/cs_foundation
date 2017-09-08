package com.sierragregg.cci_c2;

import java.util.HashSet;

/**
 * Cracking the Coding Interview e6 by Gayle Laakmann McDowell Chapter 2:
 * Question 1 Remove Dups: Write code to remove duplicates from an unsorted
 * linked list. 
 * 	FOLLOW UP: How would you solve this problem if a temporary buffer
 * is not allowed?
 * 
 * Example: 
 * 	Input: 1 -> 2 -> 1 -> 3 -> 2 
 * 	Output: 1 -> 2 -> 3
 * 
 * Explanation: Just like removing duplicates from an array, we need to
 * loop through the entire linked list, keeping track of the nodes we have
 * already seen.
 */
public class C2Question1 {
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

	C2Question1() {
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
	 * Use Java's built-in HashSet to track seen node's. If
	 * we have seen the node before, update the links to remove
	 * the duplicate, else add the node's data to the hash.
	 * Time complexity: O(n), Space complexity: O(n)
	 */
	public void deleteDupsHash() {
		HashSet<Integer> set = new HashSet<Integer>();

		Node cur = head;
		Node prev = null;

		while (cur != null) {
			if (set.contains(cur.data)) {
				prev.next = cur.next;
			} else {
				set.add(cur.data);
				prev = cur;
			}
			cur = cur.next;
		}
	}

	/**
	 * If we cannot use a buffer, i.e. extra space, we have
	 * to compare every node with every other node.
	 * Time complexity: O(n^2) Space complexity: O(1)
	 */
	public void deleteDupsLoop() {
		Node cur = head;
		while (cur != null) {
			Node runner = cur;
			while (runner.next != null) {
				if (runner.next.data == cur.data) {
					runner.next = runner.next.next;
				} else {
					runner = runner.next;
				}
			}

			cur = cur.next;
		}
	}
}
