const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🤑🤑🤑Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, '1');

const head = (arr) => {
  return arr.shift()
}


assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");