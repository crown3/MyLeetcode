package p0025

import (
	"reflect"
	"testing"

	"../../kit"
)

var Ints2List = kit.Ints2List

func Test_reverseKGroup(t *testing.T) {
	type args struct {
		head *ListNode
		k    int
	}
	tests := []struct {
		name string
		args args
		want *ListNode
	}{
		{"Case 1", args{Ints2List([]int{1, 2, 3, 4, 5}), 2}, Ints2List([]int{2, 1, 4, 3, 5})},
		{"Case 2", args{Ints2List([]int{1, 2, 3, 4, 5}), 3}, Ints2List([]int{3, 2, 1, 4, 5})},
		{"Case 3", args{Ints2List([]int{1, 2, 3, 4, 5}), 4}, Ints2List([]int{4, 3, 2, 1, 5})},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := reverseKGroup(tt.args.head, tt.args.k); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("reverseKGroup() = %v, want %v", got, tt.want)
			}
		})
	}
}
