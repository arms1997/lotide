const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🤑🤑🤑Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
};

const tail = (arr) => {
  return arr.slice(1);
};

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(tail(nums));

assertEqual(tail(nums).toString(), '2,3,4,5,6,7,8');
assertEqual(nums.length, 8);