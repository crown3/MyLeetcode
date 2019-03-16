// Definition for singly-linked list.
function ListNode(val) {
  this.val = val
  this.next = null
}

exports.ListNode = ListNode
exports.Ints2List = function(nums) {
  const emptyNode = new ListNode()
  nums.reduce((acc, cur) => {
    acc.next = new ListNode(cur)
    acc = acc.next
    return acc
  }, emptyNode)
  return emptyNode.next
}
