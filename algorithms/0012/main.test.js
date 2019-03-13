const intToRoman = require('./main')

test.each([[3, 'III'], [4, 'IV'], [9, 'IX'], [58, 'LVIII'], [1994, 'MCMXCIV']])(
  '.intToRoman(%p)',
  (a, expected) => {
    expect(intToRoman(a)).toBe(expected)
  }
)
