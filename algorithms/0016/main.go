package p0016

import (
	"math"
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	if len(nums) <= 3 {
		sum := 0
		for _, num := range nums {
			sum += num
		}
		return sum
	}
	sort.Ints(nums)
	result := math.MaxInt64
	for i := 0; i < len(nums); i++ {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		l, r := i+1, len(nums)-1
		for l < r {
			sum := nums[i] + nums[l] + nums[r]
			abs := abs(result - target)
			switch {
			case sum < target:
				if target-sum < abs {
					result = sum
				}
				l++
			case sum > target:
				if sum-target < abs {
					result = sum
				}
				r--
			}
		}
	}
	return result
}

func abs(n int) int {
	if n < 0 {
		return -n
	}
	return n
}
