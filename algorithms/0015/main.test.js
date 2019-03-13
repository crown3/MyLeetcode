const threeSum = require('./main')

test.each([[[-1, 0, 1, 2, -1, -4], [[-1, 0, 1], [-1, -1, 2]]]])(
  '.threeSum(%p)',
  (a, expected) => {
    expect(threeSum(a)).toEqual(expect.arrayContaining(expected))
  }
)
