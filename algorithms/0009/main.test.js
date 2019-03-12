const isPalindrome = require('./main')

test.each([[-121, false], [121, true], [10, false]])(
  '.isPalindrome(%d)',
  (a, expected) => {
    expect(isPalindrome(a)).toBe(expected)
  }
)
