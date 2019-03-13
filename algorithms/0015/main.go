package p0015

import (
	"sort"
)

func threeSum(nums []int) [][]int {
	sort.Ints(nums)
	result := [][]int{}
	for i := range nums {
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}
		l, r := i+1, len(nums)-1
		for l < r {
			sum := nums[i] + nums[l] + nums[r]
			switch {
			case sum > 0:
				r--
			case sum < 0:
				l++
			default:
				result = append(result, []int{nums[i], nums[l], nums[r]})
				l, r = next(nums, l, r)
			}
		}
	}
	return result
}

func next(sort []int, l, r int) (int, int) {
	for l < r {
		switch {
		case sort[l] == sort[l+1]:
			l++
		case sort[r] == sort[r-1]:
			r--
		default:
			l++
			r--
			return l, r
		}
	}
	return l, r
}
