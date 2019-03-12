package p0007

import (
	"math"
)

func reverse(x int) int {
	sign := 1
	if x < 0 {
		x = -1 * x
		sign = -1
	}
	result := 0
	for x > 0 {
		tmp := x % 10
		result = result*10 + tmp
		x = x / 10
	}
	if result > math.MaxInt32 {
		return 0
	}
	return result * sign
}
