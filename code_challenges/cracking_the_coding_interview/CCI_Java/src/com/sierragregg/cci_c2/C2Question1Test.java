package com.sierragregg.cci_c2;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C2Question1Test {
	
	C2Question1 sLinkedList;
	
	@Before
	public void setUp() throws Exception {
		sLinkedList = new C2Question1();
		sLinkedList.insertNode(4);
		sLinkedList.insertNode(5);
		sLinkedList.insertNode(5);
		sLinkedList.insertNode(4);
		sLinkedList.insertNode(4);
		sLinkedList.insertNode(5);
	}

	@Test
	public void testDeleteDupsLoop() {
		sLinkedList.deleteDupsLoop();
		assertEquals("4 5 ", sLinkedList.toString());
	}

	@Test
	public void testDeleteDupsHash() {
		sLinkedList.deleteDupsHash();
		assertEquals("4 5 ", sLinkedList.toString());
	}
}
