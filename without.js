const eqArrays = function (array1, array2) {
  return array1.length === array2.length && array1.every((item, i, arr) => {
    return item === array2[i]
  })
}

const assertArrayEquals = function (array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`😡😡😡Assertion Failed: ${array1} !== ${array2}`);
    return;
  }

  for (let item in array1) {
    if (array1[item] !== array2[item]) {
      console.log(`😡😡😡Assertion Failed: ${array1} !== ${array2}`);
      return;
    }
  }

  console.log(`🤑🤑🤑Assertion Passed: ${array1} === ${array2}`)
}

// const without = function (arr, itemsToRemove) {
//   let newArr = arr.filter((item) => !itemsToRemove.includes(item))
//   return newArr
// }

// const without = function (arr, itemsToRemove) {
//   for(let item of itemsToRemove){

//     while(arr.indexOf(item) != -1){
//       arr.splice(arr.indexOf(item), 1)
//     }

//   }
//   return arr
// }

// const without = function(arr, itemsToRemove){
//   let newArr = [...arr]
//   for(let i = 0; i < arr.length; i ++){
//     if(itemsToRemove.includes(arr[i])){
//       console.log(newArr)
//       newArr.splice(i, 1)
//     }
//   }
//   return newArr
// }


const without = (source, itemsToRemove) => {
  let resultArray = [];
  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      resultArray.push(source[i])
    }
  }
  return resultArray
}

const nums = [1, 2, 3, 4, 4, 4]

console.log(without(nums, [3, 4]))

assertArrayEquals(nums, [1, 2, 3, 4, 4, 4])

console.log(without(['hello', 'world', 'lighthouse'], ['lighthouse']))
console.log(without([5, 3, 2, 3, 4, 4, 23, 43], [5, 3, 2, 23]))