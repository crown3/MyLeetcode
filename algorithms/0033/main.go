package p0033

func search(nums []int, target int) int {
	rotateIdx := rotateIdx(nums)
	length := len(nums)
	left, right := 0, length-1
	for left <= right {
		mid := (left + right) / 2
		/* nums 是 rotated，所以需要使用 rotatedMid 来获取 mid 的值 */
		rotatedMid := (rotateIdx + mid) % length
		switch {
		case nums[rotatedMid] < target:
			left = mid + 1
		case target < nums[rotatedMid]:
			right = mid - 1
		default:
			return rotatedMid
		}
	}
	return -1
}

// 找到开始旋转的那个点的索引
func rotateIdx(nums []int) int {
	l, r := 0, len(nums)-1
	for l < r {
		mid := (l + r) / 2
		if nums[r] < nums[mid] {
			l = mid + 1
		} else {
			r = mid
		}
	}
	return l
}
