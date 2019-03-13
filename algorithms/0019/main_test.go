package p0019

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

func Test_removeNthFromEnd(t *testing.T) {
	type args struct {
		head *ListNode
		n    int
	}
	tests := []struct {
		name string
		args args
		want *ListNode
	}{
		{"Case 1", args{generateList([]int{1, 2, 3, 4, 5}), 2}, generateList([]int{1, 2, 3, 5})},
		{"Case 2", args{generateList([]int{1, 2}), 2}, generateList([]int{2})},
		{"Case 3", args{generateList([]int{1}), 1}, generateList([]int{})},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := removeNthFromEnd(tt.args.head, tt.args.n); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("removeNthFromEnd() = %v, want %v", got, tt.want)
			}
		})
	}
}
