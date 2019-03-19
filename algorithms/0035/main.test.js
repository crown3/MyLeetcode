const searchInsert = require('./main')

test.each([
  [[1, 3, 5, 6], 5, 2],
  [[1, 3, 5, 6], 2, 1],
  [[1, 3, 5, 6], 7, 4],
  [[1, 3, 5, 6], 0, 0],
])('.searchInsert(%p, %d)', (a, b, expected) => {
  expect(searchInsert(a, b)).toBe(expected)
})
