const isMatch = require('./main')

test.each([
  ['aa', 'a', false],
  ['aa', 'a*', true],
  ['ab', '.*', true],
  ['aab', 'c*a*b', true],
  ['mississippi', 'mis*is*p*.', false],
])('.isMatch(%s, %s)', (a, b, expected) => {
  expect(isMatch(a, b)).toBe(expected)
})
