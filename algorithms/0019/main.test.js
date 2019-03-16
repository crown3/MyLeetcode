const removeNthFromEnd = require('./main')
const { Ints2List } = require('../../kit/ListNode')

test.each([[[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]], [[1, 2], 2, [2]], [[1], 1, []]])(
  '.removeNthFromEnd(%p, %d)',
  (a, b, expected) => {
    expect(removeNthFromEnd(Ints2List(a), b)).toEqual(Ints2List(expected))
  }
)
