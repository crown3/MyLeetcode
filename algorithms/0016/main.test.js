const threeSumClosest = require('./main')

test.each([[[-1, 2, 1, -4], 1, 2], [[1, 1, 1, 1], 0, 3]])(
  '.threeSumClosest(%p, %d)',
  (a, b, expected) => {
    expect(threeSumClosest(a, b)).toBe(expected)
  }
)
