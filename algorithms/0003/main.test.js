const lengthOfLongestSubstring = require('./main')

test.each([
  ['abcabcbb', 3],
  ['bbbbb', 1],
  ['pwwkew', 3],
  [' ', 1],
  ['abcbefghb', 6],
])('.lengthOfLongestSubstring(%s)', (a, expected) => {
  expect(lengthOfLongestSubstring(a)).toBe(expected)
})
