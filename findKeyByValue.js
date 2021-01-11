const findKeyByValue = function(obj, value){
  let keys = Object.keys(obj)

  for(let key of keys){
    if(obj[key] === value){
      return key
    }
  }
  return 
}

module.exports = findKeyByValue