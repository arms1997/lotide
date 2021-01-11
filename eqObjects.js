const assertEqual = (actual, expected) => {
  actual === expected ? console.log(`🤑🤑🤑Assertion Passed: ${actual} === ${expected}`) :
    console.log(`😡😡😡Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2){
  return array1.length === array2.length && array1.every((item, i, arr)=>{
    return item === array2[i]
  })
}

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true
assertEqual(eqObjects(ab, ba ), true)

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
assertEqual(eqObjects(ab, abc ), false)

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true)

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(cd, cd2), false)

let eqObj1 = eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true
assertEqual(eqObj1, true)

let eqObj2 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
assertEqual(eqObj2, false)

let eqObj3 = eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false
assertEqual(eqObj3, false)
