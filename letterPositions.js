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

const letterPositions = function(sentence){

  const results = {}

  for(let i = 0; i < sentence.length; i++){
    if(sentence[i] === ' '){

    }
    else if(results[sentence[i]]){
      results[sentence[i]].push(i)
    }else{
      results[sentence[i]] = [i]
    }
  }

  return results
}

console.log(letterPositions("lighthouse in the house"))

assertArrayEquals(letterPositions("hello").e, [1]);