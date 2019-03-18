const findSubstring = require('./main')

test.each([
  ['barfoothefoobarman', ['foo', 'bar'], [0, 9]],
  ['wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word'], []],
  // ['barfoofoobarthefoobarman', ['bar', 'foo', 'the'], [6, 9, 12]],
])('.findSubstring(%s, %p)', (a, b, expected) => {
  expect(findSubstring(a, b)).toEqual(expected)
})
