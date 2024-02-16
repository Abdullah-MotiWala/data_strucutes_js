const { TimeComplexities } = require("./index");
// Method 1
function fibonacciSequence(n) {
  const initialSequence = [0, 1];
  const isNumberComputable = n > 2;

  if (!isNumberComputable) return initialSequence.slice(0, n);

  //   find the nth sequences
  for (let i = 2; i < n; i++) {
    const previousNumber = initialSequence[i - 1];
    const previousPreviousNumber = initialSequence[i - 2];

    const currentNumber = previousNumber + previousPreviousNumber;

    initialSequence.push(currentNumber);
  }
  // if starting from 0 fibanocci sequence will end at one num before ideally it should not have zero
  return initialSequence;
}

const result = fibonacciSequence(6); // [0, 1, 1, 2, 3, 5]

const complexity = { time: TimeComplexities.LINEAR_LOOP };
console.log({ result, complexity });

// Method 2 Recursion
function fibonacciSum(num) {
  if (num < 2) {
    return num;
  }
  return fibonacciSum(num - 1) + fibonacciSum(num - 2);
}

const result2 = fibonacciSum(6); // [0, 1, 1, 2, 3, 5]

const complexity2 = { time: TimeComplexities.DIVIDE_BY_TWO };
console.log({ result2, complexity2 });
