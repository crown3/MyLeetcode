package p0008

import (
	"math"
	"strings"
)

func myAtoi(str string) int {
	str = strings.TrimSpace(str)
	sign := 0
	switch str[0] {
	case '0', '1', '2', '3', '4', '5', '6', '7', '8', '9':
		sign = 1
	case '+':
		sign = 1
		str = str[1:]
	case '-':
		sign = -1
		str = str[1:]
	default:
		return 0
	}

	abs := 0
	for _, char := range str {
		if char >= '0' && char <= '9' {
			abs = abs*10 + int(char-'0')
		} else {
			break
		}
	}

	if abs > math.MaxInt32 {
		if sign > 0 {
			return math.MaxInt32
		} else {
			return math.MinInt32
		}
	} else {
		return abs * sign
	}
}
