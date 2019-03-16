const { ListNode } = require('../../kit/ListNode')
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const len = lists.length
  if (len === 0) {
    return null
  } else if (len === 1) {
    return lists[0]
  } else if (len === 2) {
    let [l1, l2] = lists
    if (!l1) {
      return l2
    }
    if (!l2) {
      return l1
    }
    const emptyNode = new ListNode()
    let cur = emptyNode
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
  } else {
    const half = Math.floor(len / 2)
    return mergeKLists([
      mergeKLists(lists.slice(0, half)),
      mergeKLists(lists.slice(half, len)),
    ])
  }
}

module.exports = mergeKLists
