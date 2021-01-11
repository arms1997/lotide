const assert = require('chai').assert
const tail = require('../tail')

describe('#tail', () => {
  it('should return \'2,3,4,5,6,7,8\' when passed [1, 2, 3, 4, 5, 6, 7, 8]', () => {
    assert.deepEqual(tail([1,2,3,4,5,6,7,8]).toString(), '2,3,4,5,6,7,8')
  })
})