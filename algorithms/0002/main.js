/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  if (l1 == null) {
    return l2
  }
  if (l2 == null) {
    return l1
  }
  let dummy = new ListNode()
  let pt = dummy
  let carry = 0
  while (l1 != null || l2 != null || carry === 1) {
    let sum = carry
    if (l1 != null) {
      sum += l1.val
      l1 = l1.next
    }
    if (l2 != null) {
      sum += l2.val
      l2 = l2.next
    }
    let node = new ListNode(sum % 10)
    pt.next = node
    pt = pt.next
    carry = sum > 9 ? 1 : 0
  }
  return dummy.next
}
