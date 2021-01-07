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

const map = function(arr, cb) {
  let result = []

  for(let item of arr){
    result.push(cb(item))
  }

  return result
}

const words = ["ground", "control", "to", "major", "tom"];
const nums = [1, 2, 3, 4, 5]
const arrayOfArrays = [['hey', 'how'], ['who', 'are']]

const results1 = map(words, word => word[0]);
const results2 = map(nums, num => num*2)
const results3 = map(nums, num => Math.pow(num, 3))


console.log(results1);
console.log(results3)

assertArrayEquals(results1, ['g', 'c', 't', 'm', 't'])
assertArrayEquals(results2, [2, 4, 6, 8, 10])
assertArrayEquals(results3, [ 1, 8, 27, 64, 125 ])