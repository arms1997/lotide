const eqArrays = function(array1, array2){

  if(array1.length !== array2.length){
    return false
  }

  for(let value in array1){
    if(Array.isArray(array1[value])){
      if(!eqArrays(array1[value], array2[value])){
        return false
      }
    }else if(array1[value] !== array2[value]){
      return false
    }
  }

  return true
}

module.exports = eqArrays

