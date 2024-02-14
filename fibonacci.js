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

  return initialSequence;
}

const result = fibonacciSequence(6); // [0, 1, 1, 2, 3, 5]

const complexity = { time: TimeComplexities.LINEAR_LOOP };
console.log({ result, complexity });
