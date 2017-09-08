package com.sierragregg.cci_c1;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C1Question7Test {

	int[][] even;
	int[][] evenRot;
	int[][] odd;
	int[][] oddRot;
	int[][] inv;
	
	@Before
	public void setUp() throws Exception {
		even = new int[][] {{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
		evenRot = new int[][] {{13,9,5,1},{14,10,6,2},{15,11,7,3},{16,12,8,4}};
		odd = new int[][] {{1,2,3},{4,5,6},{7,8,9}};
		oddRot = new int[][] {{7,4,1},{8,5,2},{9,6,3}};
		inv = new int[][] {{1,2},{3,4},{5,6}};
	}

	@Test
	public void testRotate90dCW() {
		// Test even
		C1Question7.rotate90dCW(even);
		for(int row = 0; row < even.length; row++) {
			assertArrayEquals(evenRot[row], even[row]);
		}
		
		// Test odd
		C1Question7.rotate90dCW(odd);
		for(int row = 0; row < odd.length; row++) {
			assertArrayEquals(oddRot[row], odd[row]);
		}
		
		// Test inv
		assertFalse(C1Question7.rotate90dCW(inv));
	}

}
