let {binarySearch, binarySearchRecursion} = require('../search/binary');

describe('Lineary implementation of Binary Search', function() {

  it('Should return index of item', function() {
    expect(binarySearch([1,2,4,5,7,8], 7)).toEqual(4);
  });
});