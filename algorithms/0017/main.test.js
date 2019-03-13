const letterCombinations = require('./main')

test.each([['23', ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']]])(
  '.letterCombinations(%p)',
  (a, expected) => {
    expect(letterCombinations(a)).toEqual(expected)
  }
)
