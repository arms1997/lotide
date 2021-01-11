const takeUntil = function (arr, callback) {
  for (let data in arr) {
    if (callback(arr[data])) {
      return arr.slice(0, data)
    }
  }
}

module.exports = takeUntil