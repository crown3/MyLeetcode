const fourSum = require('./main')

test.each([
  [[1, 0, -1, 0, -2, 2], 0, [[-1, 0, 0, 1], [-2, -1, 1, 2], [-2, 0, 0, 2]]],
])('.fourSum(%p, %d)', (a, b, expected) => {
  expect(fourSum(a, b)).toEqual(expect.arrayContaining(expected))
})
