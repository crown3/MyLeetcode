package p0010

import "testing"

func Test_isMatch(t *testing.T) {
	type args struct {
		s string
		p string
	}
	tests := []struct {
		name string
		args args
		want bool
	}{
		// {"Case 1", args{"aa", "a"}, false},
		// {"Case 2", args{"aa", "a*"}, true},
		// {"Case 3", args{"ab", ".*"}, true},
		{"Case 4", args{"aab", "c*a*b"}, true},
		// {"Case 5", args{"mississippi", "mis*is*p*."}, false},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := isMatch(tt.args.s, tt.args.p); got != tt.want {
				t.Errorf("isMatch() = %v, want %v", got, tt.want)
			}
		})
	}
}
