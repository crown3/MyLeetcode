const removeDuplicates = require('./main')

test.each([[[1, 1, 2], 2]])('.removeDuplicates(%p)', (a, expected) => {
  expect(removeDuplicates(a)).toBe(expected)
})
