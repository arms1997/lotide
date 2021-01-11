const without = (source, itemsToRemove) => {
  let resultArray = [];
  for(let i = 0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
      resultArray.push(source[i])
    }
  }
  return resultArray
}

module.exports = without