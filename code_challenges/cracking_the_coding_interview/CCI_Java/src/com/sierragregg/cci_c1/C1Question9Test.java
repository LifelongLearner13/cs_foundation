package com.sierragregg.cci_c1;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C1Question9Test {
	
	String[][] words;

	@Before
	public void setUp() throws Exception {
		words = new String[][] {
			{"water", "bottle"},
			{"waterbottle", "erbottlewat"}, 
			{"waterbottle", "rbottlewatt"}};
	}

	@Test
	public void test() {
		assertFalse(C1Question9.isRotation(words[0][0], words[0][1]));
		assertTrue(C1Question9.isRotation(words[1][0], words[1][1]));
		assertFalse(C1Question9.isRotation(words[2][0], words[2][1]));
	}

}
