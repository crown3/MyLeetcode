package p0034

func searchRange(nums []int, target int) []int {
	// 先检查 target 是否存在
	index := search(nums, target)
	if index == -1 {
		return []int{-1, -1}
	}
	// 利用二分查找法去找第一个target
	first := index
	for {
		tmp := search(nums[:first], target)
		if tmp == -1 {
			break
		}
		first = tmp
	}

	// 利用二分查找去找最后一个target
	last := index
	for {
		tmp := search(nums[last+1:], target)
		if tmp == -1 {
			break
		}
		last += tmp + 1
	}
	return []int{first, last}
}

// 二分查找
func search(nums []int, target int) int {
	l, r := 0, len(nums)-1
	for l <= r {
		mid := (l + r) / 2
		switch {
		case nums[mid] < target:
			l = mid + 1
		case nums[mid] > target:
			r = mid - 1
		default:
			return mid
		}
	}
	return -1
}
