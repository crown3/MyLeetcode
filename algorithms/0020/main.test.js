const isValid = require('./main')

test('should ', () => {
  expect(isValid('{[]}')).toBe(true)
})

test.each([
  ['()', true],
  ['()[]{}', true],
  ['(]', false],
  ['([)]', false],
  ['{[]}', true],
])('.isValid(%s)', (a, expected) => {
  expect(isValid(a)).toBe(expected)
})
