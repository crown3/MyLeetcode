package p0024

import (
	"reflect"
	"testing"

	"../../kit"
)

var Ints2List = kit.Ints2List

func Test_swapPairs(t *testing.T) {
	type args struct {
		head *ListNode
	}
	tests := []struct {
		name string
		args args
		want *ListNode
	}{
		{"Case 1", args{Ints2List([]int{1, 2, 3, 4})}, Ints2List([]int{2, 1, 4, 3})},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := swapPairs(tt.args.head); !reflect.DeepEqual(got, tt.want) {
				t.Errorf("swapPairs() = %v, want %v", got, tt.want)
			}
		})
	}
}
