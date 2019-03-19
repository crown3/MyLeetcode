const searchRange = require('./main')

test.each([
  [[5, 7, 7, 8, 8, 10], 8, [3, 4]],
  [[5, 7, 7, 8, 8, 10], 6, [-1, -1]],
])('.searchRange(%p, %d)', (a, b, expected) => {
  expect(searchRange(a, b)).toEqual(expected)
})
