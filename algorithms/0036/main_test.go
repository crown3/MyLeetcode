package p0036

import "testing"

func Test_isValidSudoku(t *testing.T) {
	type args struct {
		board [][]byte
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		{"Case 1", args{[][]byte{
			[]byte("..4...63."),
			[]byte("........."),
			[]byte("5......9."),
			[]byte("...56...."),
			[]byte("4.3.....1"),
			[]byte("...7....."),
			[]byte("...5....."),
			[]byte("........."),
			[]byte("........."),
		}}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isValidSudoku(tt.args.board); got != tt.want {
				t.Errorf("isValidSudoku() = %v, want %v", got, tt.want)
			}
		})
	}
}
