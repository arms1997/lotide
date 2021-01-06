// const eqArrays = function (array1, array2) {
//   let val = array1.length === array2.length && array1.every((item, i, arr) => {
//     return item === array2[i]
//   })
  
//   val ? 
//   console.log(`🤑🤑🤑Assertion Passed: ${array1} === ${array2}`):
//   console.log(`😡😡😡Assertion Failed: ${array1} !== ${array1}`);
// }

const eqArrays = function(array1, array2){
  return array1.length === array2.length && array1.every((item, i, arr)=>{
    return item === array2[i]
  })
}

const assertArrayEquals = function(array1, array2) {
  if(eqArrays(array1, array2)){
    console.log(`🤑🤑🤑Assertion Passed: ${array1} === ${array2}`)
  }else{
    console.log(`😡😡😡Assertion Failed: ${array1} !== ${array2}`);
  }
}



assertArrayEquals([1, 2, 3], [1, 2, 3, 4])
