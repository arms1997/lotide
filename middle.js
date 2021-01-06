//Arrays with one or two elements there is no middle
//for odd only one middle element should be returned 
//for even numbers both middle elements should be returned 

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

const middle = function(array){
  let arrayLength = array.length

  if(array.length < 3){
    return []
  }

  if(array.length % 2 === 0){
    return array.slice(arrayLength/2 -1, arrayLength/2 + 1)
  }else{
    return array.slice(Math.floor(arrayLength/2), Math.floor(arrayLength/2) + 1 )
  }
}

console.log(assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]))
console.log(middle([1, 2]))