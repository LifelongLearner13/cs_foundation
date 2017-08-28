package com.sierragregg.cci_c2q1;

import java.util.HashSet;

public class Chapter2Question1 {
	private Node head;
	 
    private class Node {
 
        int data;
        Node next;
 
        Node(int d) {
            data = d;
            next = null;
        }
    }
    
    Chapter2Question1() {
    	head = null;
    }
    
    public void insertNode(int num) {
    	if(head == null) {
    		head = new Node(num);
    		return;
    	}
    	
    	Node pointer = head;
    	while(pointer.next != null) {
    		pointer = pointer.next;
    	}
    	
    	pointer.next = new Node(num);
    }
    
    public String toString() {
    	if(head == null) {
    		return " ";
    	}
    	
    	StringBuilder str = new StringBuilder();
    	Node pointer = head;
    	while(pointer != null) {
    		str.append(pointer.data);
    		str.append(" ");
    		pointer = pointer.next;
    	}
    	
    	return str.toString();
    }
    
    public void deleteDupsHash() {
    	HashSet<Integer> set = new HashSet<Integer>();
    	
    	Node cur = head;
    	Node prev = null;
    	
    	while(cur != null) {
    		if(set.contains(cur.data)) {
    			prev.next = cur.next;
    		} else {
    			set.add(cur.data);
    			prev = cur;
    		}
    		cur = cur.next;
    	}
    }
    
    public void deleteDupsLoop() {
    	Node cur = head;
    	while(cur != null) {
    		Node runner = cur;
    		while(runner.next != null) {
    			if(runner.next.data == cur.data) {
    				runner.next = runner.next.next;
    			} else {
    				runner = runner.next;
    			}
    		}
    		
    		cur = cur.next;
    	}
    }
	
    public static void main(String[] args) {
    	Chapter2Question1 sll = new Chapter2Question1();
    	System.out.println(sll);
    	sll.insertNode(4);
    	sll.insertNode(5);
    	sll.insertNode(5);
    	sll.insertNode(4);
    	sll.insertNode(4);
    	sll.insertNode(5);
    	System.out.println(sll);
    	sll.deleteDupsLoop();
    	System.out.println(sll);
    }
}
