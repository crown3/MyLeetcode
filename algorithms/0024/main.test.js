const swapPairs = require('./main')
const { Ints2List } = require('../../kit/ListNode')

test.each([[[1, 2, 3, 4], [2, 1, 4, 3]]])('.swapPairs(%p)', (a, expected) => {
  expect(swapPairs(Ints2List(a))).toEqual(Ints2List(expected))
})
