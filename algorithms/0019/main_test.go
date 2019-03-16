package p0019

import (
	"reflect"
	"testing"

	"../../kit"
)

var Ints2List = kit.Ints2List

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
		{"Case 1", args{Ints2List([]int{1, 2, 3, 4, 5}), 2}, Ints2List([]int{1, 2, 3, 5})},
		{"Case 2", args{Ints2List([]int{1, 2}), 2}, Ints2List([]int{2})},
		{"Case 3", args{Ints2List([]int{1}), 1}, Ints2List([]int{})},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := removeNthFromEnd(tt.args.head, tt.args.n); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("removeNthFromEnd() = %v, want %v", got, tt.want)
			}
		})
	}
}
