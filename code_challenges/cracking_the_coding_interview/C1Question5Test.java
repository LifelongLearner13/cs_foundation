package com.sierragregg.cci_c1q5;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C1Question5Test {
	
	private String[][] words;

	@Before
	public void setUp() throws Exception {
		words = new String[][] {{"pale", "ple"}, {"pales", "pale"}, {"pale", "bale"}, 
			{"pale", "bae"}, {"bae", "pale"}, {"pale", "pela"}}; 
	}

	@Test
	public void testIsOneEditSeperate() {
		assertTrue(C1Question5.isOneEditSeperate(words[0][0], words[0][1]));
		assertTrue(C1Question5.isOneEditSeperate(words[1][0], words[1][1]));
		assertTrue(C1Question5.isOneEditSeperate(words[2][0], words[2][1]));
		assertFalse(C1Question5.isOneEditSeperate(words[3][0], words[3][1]));
		assertFalse(C1Question5.isOneEditSeperate(words[4][0], words[4][1]));
		assertFalse(C1Question5.isOneEditSeperate(words[5][0], words[5][1]));
	}
	
	@Test
	public void testIsOneEditCombined() {
		assertTrue(C1Question5.isOneEditCombined(words[0][0], words[0][1]));
		assertTrue(C1Question5.isOneEditCombined(words[1][0], words[1][1]));
		assertTrue(C1Question5.isOneEditCombined(words[2][0], words[2][1]));
		assertFalse(C1Question5.isOneEditCombined(words[3][0], words[3][1]));
		assertFalse(C1Question5.isOneEditCombined(words[4][0], words[4][1]));
		assertFalse(C1Question5.isOneEditCombined(words[5][0], words[5][1]));
	}

}
