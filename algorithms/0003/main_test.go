package p0003

import "testing"

func Test_lengthOfLongestSubstring(t *testing.T) {
	type args struct {
		s string
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{"Case 1", args{"abcabcbb"}, 3},
		{"Case 2", args{"bbbbb"}, 1},
		{"Case 3", args{"pwwkew"}, 3},
		{"Case 4", args{" "}, 1},
		{"Case 5", args{"abcbefghb"}, 6},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := lengthOfLongestSubstring(tt.args.s); got != tt.want {
				t.Errorf("lengthOfLongestSubstring() = %v, want %v", got, tt.want)
			}
		})
	}
}
