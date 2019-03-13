const { removeNthFromEnd, ListNode } = require('./main')

const generateList = arr => {
  const emptyNode = new ListNode(null)
  arr.reduce((acc, cur) => {
    acc.next = new ListNode(cur)
    acc = acc.next
    return acc
  }, emptyNode)
  return emptyNode.next
}

test('should ', () => {
  expect(removeNthFromEnd(generateList([1, 2, 3, 4, 5]), 2)).toEqual(
    generateList([1, 2, 3, 5])
  )
})

test.each([[[1, 2, 3, 4, 5], 2, [1, 2, 3, 5]], [[1, 2], 2, [2]], [[1], 1, []]])(
  '.removeNthFromEnd(%p, %d)',
  (a, b, expected) => {
    expect(removeNthFromEnd(generateList(a), b)).toEqual(generateList(expected))
  }
)
