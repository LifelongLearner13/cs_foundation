// Algorithm details: https://en.wikipedia.org/wiki/Karatsuba_algorithm

function karatsuba(num1, num2) {
  if(num1 < 0 || num2 < 0) {
    return num1 * num2;
  }

  m = Math.max(numDigits(num1), numDigits(num2));
  m2 = m/2;

}

// Based on: https://stackoverflow.com/questions/14879691/get-number-of-digits-with-javascript
function numDigits(x) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

// Based on: https://stackoverflow.com/questions/16441770/split-string-in-two-on-given-index-and-return-both-parts
function splitAt(x, idx) {
  return [Math.floor(x/)]
}