const { ListNode } = require('../../kit/ListNode')
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // l1 或 l2 其中一个为null 时, 返回另一条
  if (!l1) {
    return l2
  }
  if (!l2) {
    return l1
  }
  const emptyNode = new ListNode()
  let cur = emptyNode
  // 当两个节点都不为空时, 一直让比较小的那个往上连
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  if (l1) {
    cur.next = l1
  }
  if (l2) {
    cur.next = l2
  }
  return emptyNode.next
}

module.exports = mergeTwoLists
