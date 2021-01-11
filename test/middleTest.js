const middle = require('../middle')
const assertArrayEquals = require('../assertArraysEqual')

console.log(assertArrayEquals(middle([1, 2, 3, 4]), [2, 3]))
