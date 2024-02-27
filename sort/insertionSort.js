const { TimeComplexities } = require("../index");

// in insertion sort we considere all the elements till i as
function SortByInsertion(arr) {
  let sortedArr = [...arr];
  if (!sortedArr.length || sortedArr.length === 1)
    throw new Error("Unable to Sort");

  for (let i = 1; i < sortedArr.length; i++) {
    const numberToInsert = sortedArr[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      const sortedElement = sortedArr[j];

      if (sortedElement > numberToInsert) {
        sortedArr[j + 1] = sortedElement;
      } else {
        // as the part till i is considered sorted if number is not nti is not larger than sorted element all the other element is sorted than break the loop
        break;
      }
    }
    // after the loop finished put the last unsorted element with the value of numbertoInsert, loop will not alway get in the else case therefor doing this assignment after the loop completion
    sortedArr[j + 1] = numberToInsert;
  }

  return sortedArr;
}

const result = SortByInsertion([9, 8, 7, 11, 5, 4]);
const complexity = { time: TimeComplexities.NESTED_LOOP_SQUARE };

console.log({ result, complexity });

function SortByInsertion2(arr) {
  let sortedArr = [...arr];
  if (!sortedArr.length || sortedArr.length === 1)
    throw new Error("Unable to Sort");

  for (let i = 1; i < sortedArr.length; i++) {
    const numberToInsert = sortedArr[i];

    let sortingElementIndex = i - 1;
    while (sortingElementIndex >= 0) {
      const sortingElement = sortedArr[sortingElementIndex];
      if (numberToInsert < sortingElement) {
        sortedArr[sortingElementIndex + 1] = sortingElement;
        sortingElementIndex--;
      } else {
        break;
      }
    }

    sortedArr[sortingElementIndex + 1] = numberToInsert;
  }

  return sortedArr;
}

const result2 = SortByInsertion2([5, 2]);
const complexity2 = { time: TimeComplexities.NESTED_LOOP_SQUARE };

console.log({ result2, complexity2 });
