package com.sierragregg.cci_c1q6;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C1Question6Test {

	private String[][] words;
	
	@Before
	public void setUp() throws Exception {
		words = new String[][] {{"aaabbbccdde", "a3b3c2d2e1"}, {"abcd", "abcd"}, {}};
	}

	@Test
	public void testStrCompressBad() {
		assertEquals(words[0][1], C1Question6.strCompressBad(words[0][0]));
		assertEquals(words[1][1], C1Question6.strCompressBad(words[1][0]));
	}
	
	@Test
	public void testStrCompressOneLoop() {
		assertEquals(words[0][1], C1Question6.strCompressOneLoop(words[0][0]));
		assertEquals(words[1][1], C1Question6.strCompressOneLoop(words[1][0]));
	}
	
	@Test
	public void testStrCompressOpt() {
		assertEquals(words[0][1], C1Question6.strCompressOpt(words[0][0]));
		assertEquals(words[1][1], C1Question6.strCompressOpt(words[1][0]));
	}

}
