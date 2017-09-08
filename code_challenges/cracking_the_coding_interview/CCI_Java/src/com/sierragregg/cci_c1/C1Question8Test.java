package com.sierragregg.cci_c1;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

public class C1Question8Test {
	
	int[][] zeroInFirstCol;
	int[][] zeroInFirstColC;
	int[][] zeroInFirstRow;
	int[][] zeroInFirstRowC;
	int[][] zeroInRow;
	int[][] zeroInRowC;
	int[][] zeroInCol;
	int[][] zeroInColC;
	int[][] zeroInRec;
	int[][] zeroInRecC;

	@Before
	public void setUp() throws Exception {
		zeroInFirstCol = new int[][] {{0,1,2},{3,4,5},{6,7,8}};
		zeroInFirstColC = new int[][] {{0,0,0},{0,4,5},{0,7,8}};
		zeroInFirstRow = new int[][] {{1,0,2},{3,4,5},{6,7,8}};
		zeroInFirstRowC = new int[][] {{0,0,0},{3,0,5},{6,0,8}};
		zeroInRow = new int[][] {{1,2,3},{4,0,5},{6,7,8}};
		zeroInRowC = new int[][] {{1,0,3},{0,0,0},{6,0,8}};
		zeroInCol = new int[][] {{1,2,0},{3,4,5},{6,7,8}};
		zeroInColC = new int[][] {{0,0,0},{3,4,0},{6,7,0}};
		zeroInRec = new int[][] {{1,0,3},{4,5,6}};
		zeroInRecC = new int[][] {{0,0,0},{4,0,6}};
	}

	@Test
	public void testSetZeroArray() {
		C1Question8.setZeroArray(zeroInFirstCol);
		for(int i = 0; i < zeroInFirstCol.length; i++) {
			assertArrayEquals(zeroInFirstColC[i], zeroInFirstCol[i]);
		}
		
		C1Question8.setZeroArray(zeroInFirstRow);
		for(int i = 0; i < zeroInFirstRow.length; i++) {
			assertArrayEquals(zeroInFirstRowC[i], zeroInFirstRow[i]);
		}
		
		C1Question8.setZeroArray(zeroInRow);
		for(int i = 0; i < zeroInRow.length; i++) {
			assertArrayEquals(zeroInRowC[i], zeroInRowC[i]);
		}
		
		C1Question8.setZeroArray(zeroInCol);
		for(int i = 0; i < zeroInCol.length; i++) {
			assertArrayEquals(zeroInColC[i], zeroInCol[i]);
		}
		
		C1Question8.setZeroArray(zeroInRec);
		for(int i = 0; i < zeroInRec.length; i++) {
			assertArrayEquals(zeroInRecC[i], zeroInRec[i]);
		}
	}
	
	@Test
	public void testSetZeroNoSpace() {
		C1Question8.setZeroNoSpace(zeroInFirstCol);
		for(int i = 0; i < zeroInFirstCol.length; i++) {
			assertArrayEquals(zeroInFirstColC[i], zeroInFirstCol[i]);
		}
		
		C1Question8.setZeroNoSpace(zeroInFirstRow);
		for(int i = 0; i < zeroInFirstRow.length; i++) {
			assertArrayEquals(zeroInFirstRowC[i], zeroInFirstRow[i]);
		}
		
		C1Question8.setZeroNoSpace(zeroInRow);
		for(int i = 0; i < zeroInRow.length; i++) {
			assertArrayEquals(zeroInRowC[i], zeroInRowC[i]);
		}
		
		C1Question8.setZeroNoSpace(zeroInCol);
		for(int i = 0; i < zeroInCol.length; i++) {
			assertArrayEquals(zeroInColC[i], zeroInCol[i]);
		}
		
		C1Question8.setZeroNoSpace(zeroInRec);
		for(int i = 0; i < zeroInRec.length; i++) {
			assertArrayEquals(zeroInRecC[i], zeroInRec[i]);
		}
	}

}
