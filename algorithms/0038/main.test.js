const countAndSay = require('./main')

test.each([[1, '1'], [4, '1211']])('.countAndSay(%d)', (a, expected) => {
  expect(countAndSay(a)).toBe(expected)
})
