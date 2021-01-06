const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🤑🤑🤑Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2){
  return array1.length === array2.length && array1.every((item, i, arr)=>{
    return item === array2[i]
  })
}

console.log(eqArrays([1, 2, 3], [1, 2, '3']))

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([3, 0, 4, '1', '2'], [3, 0, 4, '1', 2]), true);
