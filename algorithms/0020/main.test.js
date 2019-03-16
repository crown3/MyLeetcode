const isValid = require('./main')

test.each([
  ['()', true],
  ['()[]{}', true],
  ['(]', false],
  ['([)]', false],
  ['{[]}', true],
])('.isValid(%s)', (a, expected) => {
  expect(isValid(a)).toBe(expected)
})
