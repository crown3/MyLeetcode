const jump = require('./main')

test('should 2', () => {
  expect(jump([2, 3, 1, 1, 4])).toBe(2)
})
