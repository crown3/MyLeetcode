const maxArea = require('./main')

test.each([[[1, 8, 6, 2, 5, 4, 8, 3, 7], 49]])(
  '.maxArea(%p)',
  (a, expected) => {
    expect(maxArea(a)).toBe(expected)
  }
)
