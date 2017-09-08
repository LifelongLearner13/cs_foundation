package com.sierragregg.cci_c1;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C1Question4Test {
	
	private String words[];

	@Before
	public void setUp() throws Exception {
		words = new String[] {"Tact Coa", "dood", "odd", "Cat?Cat@", 
				"a", "??>>", ">>??45"};
	}

	@Test
	public void testIsPermPalindromeNumVal() {
		assertTrue(C1Question4.isPermPalindromeNumVal(words[0]));
		assertTrue(C1Question4.isPermPalindromeNumVal(words[1]));
		assertTrue(C1Question4.isPermPalindromeNumVal(words[2]));
		assertTrue(C1Question4.isPermPalindromeNumVal(words[3]));
		assertTrue(C1Question4.isPermPalindromeNumVal(words[4]));
		assertTrue(C1Question4.isPermPalindromeNumVal(words[5]));
		assertTrue(C1Question4.isPermPalindromeNumVal(words[6]));
	}

	@Test
	public void testIsPermPalindromeCharArray() {
		assertTrue(C1Question4.isPermPalindromeCharArray(words[0]));
		assertTrue(C1Question4.isPermPalindromeCharArray(words[1]));
		assertTrue(C1Question4.isPermPalindromeCharArray(words[2]));
		assertFalse(C1Question4.isPermPalindromeCharArray(words[3]));
		assertTrue(C1Question4.isPermPalindromeCharArray(words[4]));
		assertTrue(C1Question4.isPermPalindromeCharArray(words[5]));
		assertFalse(C1Question4.isPermPalindromeCharArray(words[6]));
	}
	
	@Test
	public void testIsPalindromeOneLoop() {
		assertTrue(C1Question4.isPermPalindromeOneLoop(words[0]));
		assertTrue(C1Question4.isPermPalindromeOneLoop(words[1]));
		assertTrue(C1Question4.isPermPalindromeOneLoop(words[2]));
		assertTrue(C1Question4.isPermPalindromeOneLoop(words[3]));
		assertTrue(C1Question4.isPermPalindromeOneLoop(words[4]));
		assertTrue(C1Question4.isPermPalindromeOneLoop(words[5]));
		assertTrue(C1Question4.isPermPalindromeOneLoop(words[6]));
	}
}
