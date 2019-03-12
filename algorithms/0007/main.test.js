const reverse = require('./main')

test.each([[123, 321], [-123, -321]])('.reverse(%d)', (a, expected) => {
  expect(reverse(a)).toBe(expected)
})
