const generateParenthesis = require('./main')

test.each([[3, ['((()))', '(()())', '(())()', '()(())', '()()()']]])(
  '.generateParenthesis(%d)',
  (a, expected) => {
    expect(generateParenthesis(a)).toEqual(expected)
  }
)
