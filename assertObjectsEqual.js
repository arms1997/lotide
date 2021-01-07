const eqArrays = function(array1, array2){
  return array1.length === array2.length && array1.every((item, i, arr)=>{
    return item === array2[i]
  })
}

const eqObjects = function (object1, object2) {
  let object1KeysLength = Object.keys(object1).length
  let object2KeysLength = Object.keys(object2).length

  if (object1KeysLength !== object2KeysLength) {
    return false
  }

  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false
      }
    }
    else if (object1[key] !== object2[key]) {
      return false
    }
  }

  return true
}

const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect

  if (eqObjects(actual, expected)) {
    console.log(`🤑🤑🤑Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`😡😡😡Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };

assertObjectsEqual(ab, ba)

const abc = { a: "1", b: "2", c: "3" };

assertObjectsEqual(ab, abc)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

assertObjectsEqual(cd, dc)

const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, cd2)