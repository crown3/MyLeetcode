const findMedianSortedArrays = require('./main')

test.each([
  [[1, 2], [3, 4], 2.5],
  [[1, 3], [2, 4], 2.5],
  [[], [], null],
  [[1, 3], [2], 2],
])('.findMedianSortedArrays(%p, %p)', (a, b, expected) => {
  expect(findMedianSortedArrays(a, b)).toEqual(expected)
})
