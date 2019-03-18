const divide = require('./main')

test.each([[10, 3, 3], [7, -3, -2]])('.divide(%d, %d)', (a, b, expected) => {
  expect(divide(a, b)).toBe(expected)
})
