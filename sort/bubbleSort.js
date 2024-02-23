const { TimeComplexities } = require("../index");

function SortByBubble(arr) {
  let sortedArr = [...arr];
  if (!sortedArr.length || sortedArr.length === 1)
    throw new Error("Unable to Sort");

  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
      }
    }
  }

  return sortedArr;
}

const result = SortByBubble([9, 8, 7, 6, 5, 4]);
const complexity = { time: TimeComplexities.NESTED_LOOP_SQUARE };

console.log({ result, complexity });

function SortByBubble2(arr) {
  let sortedArr = [...arr];
  if (!sortedArr.length || sortedArr.length === 1)
    throw new Error("Unable to Sort");

  let isSwapped;

  do {
    isSwapped = false;
    for (let j = 0; j < sortedArr.length; j++) {
      if (sortedArr[j] > sortedArr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        isSwapped = true;
      }
    }
  } while (isSwapped);

  return sortedArr;
}

const result2 = SortByBubble2([9, 8, 7, 6, 5, 4]);
const complexity2 = { time: TimeComplexities.NESTED_LOOP_SQUARE };

console.log({ result2, complexity2 });
