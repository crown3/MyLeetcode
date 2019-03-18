package p0027

func removeElement(nums []int, val int) int {
	left, right := 0, len(nums)-1
	for {
		for left < len(nums) && nums[left] != val {
			left++
		}
		for right >= 0 && nums[right] == val {
			right--
		}
		if left >= right {
			break
		}
		nums[left], nums[right] = nums[right], nums[left]
	}
	return left
}
