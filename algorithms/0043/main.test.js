const multiply = require('./main')

test('should 56088', () => {
  expect(multiply('123', '456')).toBe('56088')
})
