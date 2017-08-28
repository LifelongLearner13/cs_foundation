let {spiralOrder} = require('../Arrays/problems/spiralOrder');

describe('Reduce 2-D array to 1-D using clockwise order', function() {

  it('Should return new 1-D array', function() {
    expect(spiralOrder([[1,2],[3,4]])).toEqual([1,2,4,3]);
  });

  it('Should handle one element arrays', function() {
    expect(spiralOrder([[1]])).toEqual([1]);
  });

  it('Should handle one column arrays', function() {
    expect(spiralOrder([[1],[2],[3]])).toEqual([1,2,3]);
  });

  it('Should handle one row arrays', function() {
    expect(spiralOrder([[1,2,3]])).toEqual([1,2,3]);
  });
});
