package p0008

import "testing"

func Test_myAtoi(t *testing.T) {
	type args struct {
		str string
	}
	tests := []struct {
		name string
		args args
		want int
	}{
		{"Case 1", args{"   -42"}, -42},
		{"Case 2", args{"4193 with words"}, 4193},
		{"Case 3", args{"words and 987"}, 0},
		{"Case 4", args{"-91283472332"}, -2147483648},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := myAtoi(tt.args.str); got != tt.want {
				t.Errorf("myAtoi() = %v, want %v", got, tt.want)
			}
		})
	}
}
