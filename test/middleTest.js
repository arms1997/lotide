const middle = require('../index').middle
const assert = require('chai').assert

describe('#middle', () => {
  it('should return [2, 3] when passed [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1,2,3,4]), [2, 3])
  })
})

