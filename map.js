const map = function(arr, cb) {
  let result = []

  for(let item of arr){
    result.push(cb(item))
  }

  return result
}

module.exports = map