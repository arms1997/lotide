const findKey = function (obj, cb) {
  for (let key in obj) {
    if (cb(obj[key])) {
      return key
    }
  }

  return 'No key with given criteria'
}

module.exports = findKey