function insertionSort(numArr) {
    for(let i = 1; i < numArr.length; i++) {
        // Must store the current key (aka, the element needing to be sorted)
        // in a variable so we don't override it when sliding elements to the right
        let key = numArr[i];
        // The portion of the array to the left of the key is already sorted
        let j = i - 1;
        // While key is smaller than the current element to its left, slide element to the right
        while(j >= 0 && numArr[j] > key) {
            numArr[j + 1] = numArr[j];
            j--;
        }
        numArr[j + 1] = key;
    }
    return numArr;
}

function processData(input) {
    let data = input.split('\n');
    let arr = data[1].split(' ').map(n => parseInt(n, 10));
    console.log(insertionSort(arr));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

module.exports = insertionSort;
