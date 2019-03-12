package p0006

import "testing"

func Test_convert(t *testing.T) {
	type args struct {
		s       string
		numRows int
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		{"Case 1", args{"PAYPALISHIRING", 3}, "PAHNAPLSIIGYIR"},
		{"Case 2", args{"PAYPALISHIRING", 4}, "PINALSIGYAHRPI"},
		{"Case 3", args{"ABCD", 3}, "ABDC"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := convert(tt.args.s, tt.args.numRows); got != tt.want {
				t.Errorf("convert() = %v, want %v", got, tt.want)
			}
		})
	}
}
