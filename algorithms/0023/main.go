package p0023

import "../../kit"

// ListNode Definition for singly-linked list
type ListNode = kit.ListNode

func mergeKLists(lists []*ListNode) *ListNode {
	switch len(lists) {
	case 0:
		return nil
	case 1:
		return lists[0]
	case 2:
		l1, l2 := lists[0], lists[1]
		if l1 == nil {
			return l2
		}
		if l2 == nil {
			return l1
		}
		emptyNode := &ListNode{}
		cur := emptyNode
		for l1 != nil && l2 != nil {
			if l1.Val < l2.Val {
				cur.Next = l1
				l1 = l1.Next
			} else {
				cur.Next = l2
				l2 = l2.Next
			}
			cur = cur.Next
		}
		if l1 == nil {
			cur.Next = l2
		}
		if l2 == nil {
			cur.Next = l1
		}
		return emptyNode.Next

	default:
		half := len(lists) / 2
		return mergeKLists([]*ListNode{mergeKLists(lists[half:]), mergeKLists(lists[:half])})
	}
}
