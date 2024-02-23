const { TimeComplexities } = require("../index");

function findElementIndex(ele, arr) {
  let elementIndex = -1;
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);

    if (arr[midIndex] === ele) {
      elementIndex = midIndex;
      break;
    }

    if (ele > arr[midIndex]) {
      startIndex = midIndex + 1;
    } else {
      endIndex = midIndex - 1;
    }
  }

  return elementIndex;
}

const result = findElementIndex(6, [1, 2, 3, 4, 5, 6, 58, 60, 61]);
const complexity = { time: TimeComplexities.REDUCED_BY_HALF };

console.log({ result, complexity });

function findElementIndex2(num, arr) {
  let elementIndex = -1;
  function findElementIndexRecursive(firstInd = 0, lastInd = arr.length - 1) {
    const midIndex = Math.floor((firstInd + lastInd) / 2);

    if (arr[midIndex] === num) {
      elementIndex = midIndex;
      return;
    }

    if (num > midIndex) {
      findElementIndexRecursive(midIndex + 1, lastInd);
    } else {
      findElementIndexRecursive(firstInd, midIndex - 1);
    }
  }

  findElementIndexRecursive();

  return elementIndex;
}

const result2 = findElementIndex2(6, [1, 2, 3, 4, 5, 6, 58, 60, 61]);
const complexity2 = { time: TimeComplexities.REDUCED_BY_HALF };

console.log({ result2, complexity2 });
