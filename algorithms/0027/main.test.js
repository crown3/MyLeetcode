const removeElement = require('./main')

test.each([[[3, 2, 2, 3], 3, 2]])(
  '.removeElement(%p, %b)',
  (a, b, expected) => {
    expect(removeElement(a, b)).toBe(expected)
  }
)
