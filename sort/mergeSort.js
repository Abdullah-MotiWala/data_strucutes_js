const { TimeComplexities } = require("../index");

function sortByMerge(arr) {
  if (arr >= 1) {
    return arr;
  }
  const sortedArr = [...arr];

  const midPoint = Math.ceil(sortedArr.length / 2);

  const rightArr = sortedArr.slice(0, midPoint);
  const leftArr = sortedArr.slice(midPoint);
  const mergedArray = merge(sortByMerge(leftArr), sortByMerge(rightArr));
  return mergedArray;
}

function merge(left, right) {
  const sorted = [];

  // running loop for both arrays length, as left and right could have different length and any of them could be empty before second one
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  return [...sorted, ...left, ...right];
}

const result = sortByMerge([9, 8, 7, 11, 5, 4]);
// if array is inverted sort iteration will not be minimize so TimeComplexity will ne (0n^2), in this case nlogn
const complexity = { time: TimeComplexities.REDUCED_BY_HALF };

console.log({ result, complexity });
