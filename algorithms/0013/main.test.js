const romanToInt = require('./main')

test.each([['III', 3], ['IV', 4], ['IX', 9], ['LVIII', 58], ['MCMXCIV', 1994]])(
  '.romanToInt(%p)',
  (a, expected) => {
    expect(romanToInt(a)).toBe(expected)
  }
)
