package kit

// ListNode Definition for singly-linked list
type ListNode struct {
	Val  int
	Next *ListNode
}

// Ints2List Convert []int to List
func Ints2List(nums []int) *ListNode {
	emptyNode := &ListNode{}
	current := emptyNode
	for _, val := range nums {
		emptyNode.Next = &ListNode{Val: val}
		emptyNode = emptyNode.Next
	}
	return current.Next
}
