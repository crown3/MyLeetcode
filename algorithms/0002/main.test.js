const addTwoNumbers = require('./main')
const { Ints2List } = require('../../kit/ListNode')

test.each([
  [[2, 4, 3], [5, 6, 4], [7, 0, 8]],
  [[9, 1], [1, 8, 9], [0, 0, 0, 1]],
  [[0, 0, 1], [], [0, 0, 1]],
])('.addTwoNumbers(%p, %p)', (a, b, expected) => {
  expect(addTwoNumbers(Ints2List(a), Ints2List(b))).toEqual(Ints2List(expected))
})
