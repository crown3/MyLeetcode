const longestValidParentheses = require('./main')

test.each([['(()', 2], [')()())', 4], ['()())', 4]])(
  '.longestValidParentheses(%s)',
  (a, expected) => {
    expect(longestValidParentheses(a)).toBe(expected)
  }
)
