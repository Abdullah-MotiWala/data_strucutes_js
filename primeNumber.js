const { TimeComplexities } = require("./index");

// Method 1
function isPrimeNumber(number) {
  let isPrimeNumber = false;
  for (let i = 2; i < number; i++) {
    let multiplier = 2;
    let product = 1;
    while (!isPrimeNumber && product < number) {
      product = multiplier * i;
      if (product === number) isPrimeNumber = true;
      multiplier += 1;
    }

    if (isPrimeNumber) break;
  }
  return isPrimeNumber;
}

const result = isPrimeNumber(5);
const complexity = { time: TimeComplexities.NESTED_LOOP_SQUARE };
console.log({ result, complexity });

// Method 2
function isPrimeNumber2(n) {
  let isPrimeNumber = false;
  for (let i = 2; i < n; i++) {
    let isDivisible = n % i === 0;
    if (!isDivisible) {
      isPrimeNumber = true;
      break;
    }
  }

  return isPrimeNumber;
}

const result2 = isPrimeNumber2(4);
const complexity2 = { time: TimeComplexities.LINEAR_LOOP };
console.log({ result2, complexity2 });

// Method 2
function isPrimeNumber3(n) {
  let isPrimeNumber = false;
  // finding sqrt because if number is greater than the sqrt it cannot be prime lets think
  // e.g 25: sqrt = 5, if something is greater like 6*6 or 6*7 all will be greater than no. so therefor not checking number greater than sqrRoot
  for (let i = 2; i <= Math.sqrt(n); i++) {
    let isDivisible = n % i === 0;
    if (!isDivisible) {
      isPrimeNumber = true;
      break;
    }
  }

  return isPrimeNumber;
}

const result3 = isPrimeNumber3(4);
const complexity3 = { time: TimeComplexities.LINEAR_SQUARE_ROOT_LOOP };
console.log({ result3, complexity3 });