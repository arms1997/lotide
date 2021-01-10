const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🤑🤑🤑Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2){
  return array1.length === array2.length && array1.every((item, i, arr)=>{
    return item === array2[i]
  })
}

const eqArrays2 = function(array1, array2){

  if(array1.length !== array2.length){
    return false
  }

  for(let value in array1){
    if(Array.isArray(array1[value])){
      if(!eqArrays2(array1[value], array2[value])){
        return false
      }
    }else if(array1[value] !== array2[value]){
      return false
    }
  }

  return true
}

assertEqual(eqArrays2([1, 2, 3], [1, 2, '3']), false)

assertEqual(eqArrays2([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays2([3, 0, 4, '1', 2], [3, 0, 4, '1', 2]), true);

assertEqual(eqArrays2([[2, 3], [4]], [[2, 3], [4]]), true) // => true

assertEqual(eqArrays2([[2, 3], [4]], [[2, 3], [4, 5]]), false) // => false
assertEqual(eqArrays2([[2, 3], [4]], [[2, 3], 4]), false) // => false
