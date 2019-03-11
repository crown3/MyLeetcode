package p0002

import (
	"reflect"
	"testing"
)

func generateList(arr []int) *ListNode {
	emptyNode := &ListNode{}
	current := emptyNode
	for _, val := range arr {
		emptyNode.Next = &ListNode{Val: val}
		emptyNode = emptyNode.Next
	}
	return current.Next
}

func Test_addTwoNumbers(t *testing.T) {
	type args struct {
		l1 *ListNode
		l2 *ListNode
	}
	tests := []struct {
		name string
		args args
		want *ListNode
	}{
		{"Case 1", args{l1: generateList([]int{2, 4, 3}), l2: generateList([]int{5, 6, 4})}, generateList([]int{7, 0, 8})},
		{"Case 2", args{l1: generateList([]int{9, 1}), l2: generateList([]int{1, 8, 9})}, generateList([]int{0, 0, 0, 1})},
		{"Case 3", args{l1: generateList([]int{0, 0, 1}), l2: generateList([]int{})}, generateList([]int{0, 0, 1})},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := addTwoNumbers(tt.args.l1, tt.args.l2); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("addTwoNumbers() = %v, want %v", got, tt.want)
			}
		})
	}
}
