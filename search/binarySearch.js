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

const result = findElementIndex(61, [1, 2, 3, 4, 5, 6, 58, 60, 61]);
const complexity = { time: TimeComplexities.REDUCED_BY_HALF };

console.log({ result, complexity });
