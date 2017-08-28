package com.sierragregg.cci_c1q2;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C1Question2Test {

	private String[] words;
	
	@Before
	public void setUp() throws Exception {
		words = new String[] {"abcde", "abcde", "hello", "hell", "apple", "elppa", "kite", "iket", "padle", "padled"};
	}

	@Test
	public void testIsPermutationSort() {
		assertTrue(C1Question2.isPermutationSort(words[0], words[1]));
		assertFalse(C1Question2.isPermutationSort(words[2], words[3]));
		assertTrue(C1Question2.isPermutationSort(words[4], words[5]));
		assertTrue(C1Question2.isPermutationSort(words[6], words[7]));
		assertFalse(C1Question2.isPermutationSort(words[8], words[9]));
	}
	
	@Test
	public void testIsPermutationCount() {
		assertTrue(C1Question2.isPermutationCount(words[0], words[1]));
		assertFalse(C1Question2.isPermutationCount(words[2], words[3]));
		assertTrue(C1Question2.isPermutationCount(words[4], words[5]));
		assertTrue(C1Question2.isPermutationCount(words[6], words[7]));
		assertFalse(C1Question2.isPermutationCount(words[8], words[9]));
	}

}
