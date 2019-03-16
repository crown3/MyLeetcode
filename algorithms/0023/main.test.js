const mergeKLists = require('./main')
const { Ints2List } = require('../../kit/ListNode')

test.each([[[[1, 4, 5], [1, 3, 4], [2, 6]], [1, 1, 2, 3, 4, 4, 5, 6]]])(
  '.mergeKLists(%p)',
  (a, expected) => {
    const lists = a.map(item => Ints2List(item))
    expect(mergeKLists(lists)).toEqual(Ints2List(expected))
  }
)
