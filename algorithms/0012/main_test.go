package p0012

import "testing"

func Test_intToRoman(t *testing.T) {
	type args struct {
		num int
	}
	tests := []struct {
		name string
		args args
		want string
	}{
		{"Case 1", args{3}, "III"},
		{"Case 2", args{4}, "IV"},
		{"Case 3", args{9}, "IX"},
		{"Case 4", args{58}, "LVIII"},
		{"Case 5", args{1994}, "MCMXCIV"},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := intToRoman(tt.args.num); got != tt.want {
				t.Errorf("intToRoman() = %v, want %v", got, tt.want)
			}
		})
	}
}
