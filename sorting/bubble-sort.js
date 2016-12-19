function swap(array, index1, index2) {
  [array[index1], array[index2]] = [array[index2], array[index1]];
}

function bubbleSort(numArr) {
  let swapped = false;
  for(let i = 0; i < numArr.length; i++) {
    for(let j = 0; j < numArr.length - i - 1; j++) {
      if(numArr[j] > numArr[j + 1]) {
        swap(numArr, j, j+1);
        swapped = true;
      }
    }

    // Improvement, if the inner loop did not make any changes
    // break out of the outer loop.
    if (!swapped) {
      break;
    }
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

module.exports = bubbleSort;
