const eqArrays = function (array1, array2) {
  let val = array1.length === array2.length && array1.every((item, i, arr) => {
    return item === array2[i]
  })
  
  val ? console.log(`🤑🤑🤑Assertion Passed: ${array1} === ${array2}`) :
  console.log(`😡😡😡Assertion Failed: ${array1} !== ${array1}`);
}

eqArrays([1, 2, 3], [1, 2, 3])