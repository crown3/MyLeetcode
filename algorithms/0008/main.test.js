const myAtoi = require('./main')

test.each([
  ['   -42', -42],
  ['4193 with words', 4193],
  ['words and 987', 0],
  ['-91283472332', -2147483648],
])('.myAtoi(%s)', (a, expected) => {
  expect(myAtoi(a)).toBe(expected)
})
