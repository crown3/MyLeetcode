const longestPalindrome = require('./main')

test.each([['babad', 'bab'], ['ac', 'a'], ['aacdefcaa', 'aa']])(
  '.longestPalindrome(%s)',
  (a, expected) => {
    expect(longestPalindrome(a)).toBe(expected)
  }
)
