// Finds the nth element in an array
// average and worst case: O(log n)
var findNthElement = function(array, n) {
    if (array.length == 1) {
        return array[n]; // O(1)
    }

    var middle = Math.floor(array.length / 2); // O(1) - If we get picky this might be more expensive but we're focusing on this algorithm, not Math.floor
    if (n < middle) {
        return findNthElement(array.slice(0, middle), n); // O(log n) Spliting array in half
    }
    else {
        return findNthElement(array.slice(middle, array.length), n - middle); // O(log n)
    }
};

// Find a series of elements from an array
// Full O(n log n)
// O(n) dominates O(log n), so we can drop O(log n)
// complexity is best O(log n)
var findElements = function(array, toFind) {
    var elements = []; // O(1)
    for (var i=0; i<toFind.length; i++) { // Usually this would be something like O(n), but toFind will usually be smaller than array so it will not have to touch every element of array
        var element = findNthElement(array, toFind[i]); // O(log n) From above
        elements.push(element); // O(1)
    }
    return elements; // O(1)
};

// Returns whether a number is odd or even
var isOdd = function(number) {
    var remainder = number % 2;
    return remainder == 1;
};

// Calculates the sample autocorrelation matrix (i.e. the matrix found by
// multiplying every item in an array with every other item)
var sampleAutocorrelationMatrix = function(array) {
    var matrix = [];
    for (var i=0; i<array.length; i++) {
        var row = [];
        for (var j=0; j<array.length; j++) {
            row.push(array[i] * array[j]);
        }
        matrix.push(row);
    }
};

// Doubles every value in an array
var doubleArray = function(array) {
    for (var i=0; i<array.length; i++) {
        array[i] = array[i] * 2;
    }
    return array;
};

// Calculates the nth triangle number
// This one's a challenge! :)
var triangleNumbers = function(n) {
    if (n == 0 || n == 1) {
        return n;
    }
    return triangleNumbers(n - 1) + triangleNumbers(n - 1) - triangleNumbers(n - 2) + 1;
};
