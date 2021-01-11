const middle = function (array) {
  let arrayLength = array.length

  if (arrayLength < 3) {
    return []
  }

  if (arrayLength % 2 === 0) {
    return array.slice(arrayLength / 2 - 1, arrayLength / 2 + 1)
  } else {
    return array.slice(Math.floor(arrayLength / 2), Math.floor(arrayLength / 2) + 1)
  }
}

module.exports = middle