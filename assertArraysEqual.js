// const eqArrays = function (array1, array2) {
//   let val = array1.length === array2.length && array1.every((item, i, arr) => {
//     return item === array2[i]
//   })
  
//   val ? 
//   console.log(`🤑🤑🤑Assertion Passed: ${array1} === ${array2}`):
//   console.log(`😡😡😡Assertion Failed: ${array1} !== ${array1}`);
// }

const eqArrays = function(array1, array2) {
  if(array1.length !== array2.length){
    console.log(`😡😡😡Assertion Failed: ${array1} !== ${array2}`);
    return; 
  }

  for(let item in array1){
    if(array1[item] !== array2[item]){
      console.log(`😡😡😡Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
  }

  console.log(`🤑🤑🤑Assertion Passed: ${array1} === ${array2}`)
}



eqArrays([1, 2, 3], [1, 2, 3, 4])