const convert = require('./main')

test.each([
  ['PAYPALISHIRING', 3, 'PAHNAPLSIIGYIR'],
  ['PAYPALISHIRING', 4, 'PINALSIGYAHRPI'],
])('./convert(%s, %d)', (a, b, expected) => {
  expect(convert(a, b)).toBe(expected)
})
