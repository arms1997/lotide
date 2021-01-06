// const flatten = (arr) => {
//   return arr.reduce((accumulator, value) => accumulator.concat(value), [])
  
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

const eqArrays = function(array1, array2){
  return array1.length === array2.length && array1.every((item, i, arr)=>{
    return item === array2[i]
  })
}

const flatten = function(arr){
  let newArr = []

  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      for(let j = 0; j < arr[i].length; j++){
        newArr.push(arr[i][j])
      }
    } else {
      newArr.push(arr[i])
    }
  }
  return newArr
}

console.log(flatten([1, [2], [3, 3, 3, [3, 2, 5]]]))