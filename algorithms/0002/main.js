const { ListNode } = require('../../kit/ListNode')
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const answer = new ListNode()
  let copy = answer
  let tmp = 0
  while (l1 || l2) {
    const a = l1 ? l1.val : 0
    const b = l2 ? l2.val : 0
    const sum = a + b + tmp
    tmp = Math.floor(sum / 10)
    copy.next = new ListNode(sum % 10)
    copy = copy.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }
  if (tmp) {
    copy.next = new ListNode(tmp)
  }
  return answer.next
}

module.exports = addTwoNumbers
