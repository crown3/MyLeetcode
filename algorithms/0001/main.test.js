const twoSum = require('./main')

test.each([[[2, 7, 11, 15], 9, [0, 1]], [[1, 3, 5], 8, [1, 2]]])(
  '.twoSum(%p, %i)',
  (a, b, expected) => {
    expect(twoSum(a, b)).toEqual(expected)
  }
)
