package problem0002

// ListNode Definition for singly-linked list
type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	answer := &ListNode{}
	current := answer
	tmp := 0

	for l1 != nil || l2 != nil {
		sum := tmp
		if l1 != nil {
			sum += l1.Val
			l1 = l1.Next
		}
		if l2 != nil {
			sum += l2.Val
			l2 = l2.Next
		}
		tmp = sum / 10
		current.Next = &ListNode{Val: sum % 10}
		current = current.Next
	}
	if tmp != 0 {
		current.Next = &ListNode{Val: tmp}
	}

	return answer.Next
}
