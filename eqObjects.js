const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🤑🤑🤑Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
};

// const eqArrays = function(array1, array2){
//   return array1.length === array2.length && array1.every((item, i, arr)=>{
//     return item === array2[i]
//   })
// }

const eqArrays = require('./eqArrays')

const eqObjects = function(object1, object2){
  let object1KeysLength = Object.keys(object1).length
  let object2KeysLength = Object.keys(object2).length

  if(object1KeysLength !== object2KeysLength){
    return false
  }

  for(let key in object1){
    if(Array.isArray(object1[key])){
      if(!eqArrays(object1[key], object2[key])){
        return false
      }
    }else if(typeof object1[key] === 'object' && typeof object1[key] !== null){
      if(!eqObjects(object1[key], object2[key])){
        return false
      }
    }
    else if(object1[key] !== object2[key]){
      return false
    }
  }

  return true
}

module.exports = eqObjects