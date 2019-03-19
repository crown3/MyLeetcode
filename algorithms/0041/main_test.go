package p0041

import "testing"

func Test_firstMissingPositive(t *testing.T) {
	type args struct {
		nums []int
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{"Case 1", args{[]int{1, 2, 0}}, 3},
		{"Case 2", args{[]int{3, 4, -1, 1}}, 2},
		{"Case 3", args{[]int{7, 8, 9, 11, 12}}, 1},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := firstMissingPositive(tt.args.nums); got != tt.want {
				t.Errorf("firstMissingPositive() = %v, want %v", got, tt.want)
			}
		})
	}
}
