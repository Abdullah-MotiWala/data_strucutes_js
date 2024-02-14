const { TimeComplexities } = require("./index");

// Method 1
function findFactorial(n) {
  const isNegativeNumber = n < 0;
  if (isNegativeNumber)
    throw new Error("Unable to find factorial of negative number");

  let factorial = 1;
  const isZeroNumber = n === 0;
  if (!isZeroNumber) {
    for (let i = 2; i <= n; i++) {
      factorial *= i;
      // 2*3*4*5 : 5
    }
  }

  return factorial;
}

const result = findFactorial(4);
const complexity = { time: TimeComplexities.LINEAR_LOOP };
console.log("method 1:", { result, complexity });

function findFactorial2(n) {
  const isNegativeNumber = n < 0;
  if (isNegativeNumber)
    throw new Error("Unable to find factorial of negative number");

  let factorial = 1;
  const isZeroNumber = n === 0;
  if (!isZeroNumber) {
    for (let i = n; i > 1; i--) {
      factorial *= i;
      // 5 : 5*4*3*2
    }
  }

  return factorial;
}

const result2 = findFactorial2(4);
const complexity2 = { time: TimeComplexities.LINEAR_LOOP };

console.log("method 2:", { result2, complexity2 });
