const { ListNode } = require('../../kit/ListNode')

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  if (k < 2 || head == null || head.next === null) {
    return head
  }
  let [tail, needReverse] = getTail(head, k)

  if (needReverse) {
    let tailNext = tail.next

    tail.next = null
    const tmp = reverse(head, tail)
    head = tmp[0]
    tail = tmp[1]
    tail.next = reverseKGroup(tailNext, k)
  }
  return head
}

function getTail(head, k) {
  while (k > 1 && head !== null) {
    head = head.next
    k--
  }
  return [head, k === 1 && head !== null]
}
function reverse(head, tail) {
  let curPre = head
  let cur = head.next
  while (cur !== null) {
    let tmp = curPre
    curPre = cur
    cur = cur.next
    cur.next = tmp
  }
  return [tail, head]
}

module.exports = reverseKGroup
