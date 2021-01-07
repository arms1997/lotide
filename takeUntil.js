const { createBrotliCompress } = require("zlib");

const eqArrays = function (array1, array2) {
  return array1.length === array2.length && array1.every((item, i, arr) => {
    return item === array2[i]
  })
}

const assertArrayEquals = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🤑🤑🤑Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`😡😡😡Assertion Failed: ${array1} !== ${array2}`);
  }
}

const takeUntil = function (arr, callback) {
  for (let data in arr) {
    if (callback(arr[data])) {
      return arr.slice(0, data)
    }
  }
}

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArrayEquals(results2, ['I\'ve', 'been', 'to', 'Hollywood'])


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArrayEquals(results1, [1, 2, 5, 7, 2])

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertArrayEquals(results1, [1, 2, 5, 7, 2])