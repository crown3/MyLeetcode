const strStr = require('./main')

test.each([['hello', 'll', 2], ['aaaaa', 'bba', -1]])(
  '.strStr(%s, %s)',
  (a, b, expected) => {
    expect(strStr(a, b)).toBe(expected)
  }
)
