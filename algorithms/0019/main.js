// Definition for singly-linked list.
function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // 用两个指针上去即可
  // 注意要加一个空节点上去, 要不然当你的链表长度和你的要删除的长度相等时, 你是无法删除的
  const emptyNode = new ListNode()
  emptyNode.next = head
  let first = emptyNode
  let second = emptyNode
  while (first && n >= 0) {
    first = first.next
    n--
  }
  while (first) {
    first = first.next
    second = second.next
  }
  second.next = second.next.next
  return emptyNode.next
}

exports.ListNode = ListNode
exports.removeNthFromEnd = removeNthFromEnd
