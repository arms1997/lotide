const assertEqual = require('../assertEqual')
const tail = require('../tail')

let nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(tail(nums));

assertEqual(tail(nums).toString(), '2,3,4,5,6,7,8');
assertEqual(nums.length, 8);