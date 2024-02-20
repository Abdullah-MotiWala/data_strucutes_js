const { TimeComplexities } = require("../index");

// Problem 1
function findElementIndex(ele, array) {
  let elementIndex = -1;
  for (let i = 0; i < array.length; i++) {
    const isElementFound = array[i] === ele;
    if (isElementFound) {
      elementIndex = i;
      return elementIndex;
    }
  }
}

const result = findElementIndex(2, [1, 5, 3, 4,2]);
const complexity = { time: TimeComplexities.LINEAR_LOOP };

console.log({ result, complexity });
