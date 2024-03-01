const { TimeComplexities } = require("../index");

function sortByQuick(array) {
  if (array.length <= 1) return [];
  const sortArry = [...array];
  const privotElement = sortArry[sortArry.length - 1];

  let left = [];
  let right = [];

  for (let i = 0; i < sortArry.length - 1; i++) {
    const currentElement = sortArry[i];

    if (currentElement > privotElement) {
      right.push(currentElement);
    } else {
      left.push(currentElement);
    }
  }

  return [...sortByQuick(left), privotElement, ...sortByQuick(right)];
}

const result = sortByQuick([9, 8, 7, 11, 5, 4]);
// if array is inverted sort iteration will not be minimize so TimeComplexity will ne (0n^2), in this case nlogn
const complexity = { time: TimeComplexities.REDUCED_BY_HALF };

console.log({ result, complexity });
