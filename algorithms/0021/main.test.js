const mergeTwoLists = require('./main')
const { Ints2List } = require('../../kit/ListNode')

test.each([[[1, 2, 4], [1, 3, 4], [1, 1, 2, 3, 4, 4]]])(
  '.mergeTwoLists(%p, %p)',
  (a, b, expected) => {
    expect(mergeTwoLists(Ints2List(a), Ints2List(b))).toEqual(
      Ints2List(expected)
    )
  }
)
