const { TimeComplexities } = require("./index");

// Method 1
function isPowerOfTwo(n) {
  if (n % 2 !== 0) return false;
  let lastDividend = n;
  while (lastDividend > 2) {
    lastDividend /= 2;
  }

  return lastDividend === 2;
}

const result = isPowerOfTwo(64);
const complexity = { time: TimeComplexities.REDUCED_BY_HALF };
console.log({ result, complexity });

// Method 2
function isPowerOfTwo2(n) {
  if (n < 1) return false;
  let dividend = n;
  while (dividend > 1) {
    if (dividend % 2 !== 0) return false;

    dividend /= 2;
  }
  return true;
}

const result2 = isPowerOfTwo2(64);
const complexity2 = { time: TimeComplexities.REDUCED_BY_HALF };
console.log({ result2, complexity2 });

// Method 2
function isPowerOfTwo3(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

const result3 = isPowerOfTwo3(64);
const complexity3 = { time: TimeComplexities.CONSTANT };
console.log({ result3, complexity3 });
