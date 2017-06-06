// Import sorting algorithms
let {bubbleSort, bubbleSortWhile, bubbleSortRecursive} = require('./bubble-sort');
let {insertionSort} = require('./insertion-sort');
let {selectionSort} = require('./selection-sort');
let {mergeSort} = require('./merge-sort');
let {quickSort} = require('./quick-sort');

// Process input provided through Standard in and call sorting functions.
function processData(input) {
    let arr = input.split(' ').map(n => parseInt(n, 10));
    console.log('Input Array: ', arr);

    // Pass a copy so local arr is not changed
    console.log('BUBBLE SORT');
    console.log('Iterative: ', bubbleSort(arr.slice()));
    console.log('Iterative with While: ', bubbleSortWhile(arr.slice()));
    console.log('Recursive: ', bubbleSortRecursive(arr.slice()));
    console.log();

    console.log('SELECTION SORT');
    console.log('Iterative: ', selectionSort(arr.slice()))
    console.log();

    console.log('INSERTION SORT');
    console.log('Iterative: ', insertionSort(arr.slice()));
    console.log();

    console.log('MERG SORT');
    console.log('Recursive: ', mergeSort(arr.slice()));
    console.log();

    console.log('QUICK SORT');
    console.log('Basic: ', quickSort(arr.slice()));
    console.log();
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});