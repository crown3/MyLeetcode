package p0021

import (
	"reflect"
	"testing"

	"../../kit"
)

var Ints2List = kit.Ints2List

func Test_mergeTwoLists(t *testing.T) {
	type args struct {
		l1 *ListNode
		l2 *ListNode
	}
	tests := []struct {
		name string
		args args
		want *ListNode
	}{
		// TODO: Add test cases.
		{"Case 1", args{Ints2List([]int{1, 3, 4}), Ints2List([]int{1, 2, 4})}, Ints2List([]int{1, 1, 2, 3, 4, 4})},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := mergeTwoLists(tt.args.l1, tt.args.l2); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("mergeTwoLists() = %v, want %v", got, tt.want)
			}
		})
	}
}
