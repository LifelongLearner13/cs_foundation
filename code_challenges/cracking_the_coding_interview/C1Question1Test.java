package com.sierragregg.cci_c1q1;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C1Question1Test {
	private String[] words;

	@Before
	public void setUp() throws Exception {
		words = new String[] {"abcde", "hello", "apple", "kite", "padle"};
	}

	@Test
	public void testIsUniqueCharsArr() {
		assertTrue(C1Question1.isUniqueCharsArr(words[0]));
		assertFalse(C1Question1.isUniqueCharsArr(words[1]));
		assertFalse(C1Question1.isUniqueCharsArr(words[2]));
		assertTrue(C1Question1.isUniqueCharsArr(words[3]));
		assertTrue(C1Question1.isUniqueCharsArr(words[4]));
	}
	
	@Test
	public void testIsUniqueCharsBit() {
		assertTrue(C1Question1.isUniqueCharsBit(words[0]));
		assertFalse(C1Question1.isUniqueCharsBit(words[1]));
		assertFalse(C1Question1.isUniqueCharsBit(words[2]));
		assertTrue(C1Question1.isUniqueCharsBit(words[3]));
		assertTrue(C1Question1.isUniqueCharsBit(words[4]));
	}
	
	@Test
	public void testIsUniqueCharsBruteForce() {
		assertTrue(C1Question1.isUniqueCharsBruteForce(words[0]));
		assertFalse(C1Question1.isUniqueCharsBruteForce(words[1]));
		assertFalse(C1Question1.isUniqueCharsBruteForce(words[2]));
		assertTrue(C1Question1.isUniqueCharsBruteForce(words[3]));
		assertTrue(C1Question1.isUniqueCharsBruteForce(words[4]));
	}
	
	@Test
	public void testIsUniqueCharsSort() {
		assertTrue(C1Question1.isUniqueCharsSort(words[0]));
		assertFalse(C1Question1.isUniqueCharsSort(words[1]));
		assertFalse(C1Question1.isUniqueCharsSort(words[2]));
		assertTrue(C1Question1.isUniqueCharsSort(words[3]));
		assertTrue(C1Question1.isUniqueCharsSort(words[4]));
	}

}
