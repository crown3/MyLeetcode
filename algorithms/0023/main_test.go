package p0023

import (
	"reflect"
	"testing"

	"../../kit"
)

var Ints2List = kit.Ints2List

func Test_mergeKLists(t *testing.T) {
	type args struct {
		lists []*ListNode
	}
	tests := []struct {
		name string
		args args
		want *ListNode
	}{
		{"Case 1", args{[]*ListNode{
			Ints2List([]int{}),
			Ints2List([]int{1})}}, Ints2List([]int{1})},
		{"Case 2", args{[]*ListNode{
			Ints2List([]int{1, 4, 5}),
			Ints2List([]int{1, 3, 4}),
			Ints2List([]int{2, 6})}}, Ints2List([]int{1, 1, 2, 3, 4, 4, 5, 6})},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := mergeKLists(tt.args.lists); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("mergeKLists() = %v, want %v", got, tt.want)
			}
		})
	}
}
