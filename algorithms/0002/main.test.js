const { addTwoNumbers, ListNode } = require('./main')

const generateList = arr => {
  const emptyNode = new ListNode(null)
  arr.reduce((acc, cur) => {
    acc.next = new ListNode(cur)
    acc = acc.next
    return acc
  }, emptyNode)
  return emptyNode.next
}

test.each([
  [[2, 4, 3], [5, 6, 4], [7, 0, 8]],
  [[9, 1], [1, 8, 9], [0, 0, 0, 1]],
  [[0, 0, 1], [], [0, 0, 1]],
])('.addTwoNumbers(%p, %p)', (a, b, expected) => {
  expect(addTwoNumbers(generateList(a), generateList(b))).toEqual(
    generateList(expected)
  )
})
