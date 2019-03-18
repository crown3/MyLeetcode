const search = require('./main')

test.each([[[4, 5, 6, 7, 0, 1, 2], 0, 4], [[4, 5, 6, 7, 0, 1, 2], 3, -1]])(
  '.search(%p, %d)',
  (a, b, expected) => {
    expect(search(a, b)).toBe(expected)
  }
)
