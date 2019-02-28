const twoSum = require('./main')

test('nums = [2, 7, 11, 15], target = 9, return [0, 1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
})
