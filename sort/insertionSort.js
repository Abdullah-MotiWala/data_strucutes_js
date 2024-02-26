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

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     const numberToInsert = arr[i];
//     let j;

//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > numberToInsert) {
//         arr[j + 1] = arr[j];
//       } else {
//         break;
//       }
//     }

//     arr[j + 1] = numberToInsert;
//   }

//   return arr;
// }

// // Example usage:
// const sortedArray = insertionSort([5, 3, 8, 1, 2]);
// console.log(sortedArray); // Output: [1, 2, 3, 5, 8]
