const longestCommonPrefix = require('./main')

test.each([
  [['flower', 'flow', 'flight'], 'fl'],
  [['dog', 'racecar', 'car'], ''],
])('.longestCommonPrefix(%p)', (a, expected) => {
  expect(longestCommonPrefix(a)).toBe(expected)
})
