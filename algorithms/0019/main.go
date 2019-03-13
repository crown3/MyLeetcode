package p0019

// ListNode Definition for singly-linked list
type ListNode struct {
	Val  int
	Next *ListNode
}

func removeNthFromEnd(head *ListNode, n int) *ListNode {
	emptyNode := &ListNode{}
	emptyNode.Next = head
	first, second := emptyNode, emptyNode
	for first != nil && n >= 0 {
		first = first.Next
		n--
	}
	for first != nil {
		first = first.Next
		second = second.Next
	}
	second.Next = second.Next.Next
	return emptyNode.Next
}
