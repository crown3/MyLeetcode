package p0026

func removeDuplicates(nums []int) int {
	left, right, length := 0, 1, len(nums)
	for ; right < length; right++ {
		if nums[left] == nums[right] {
			continue
		}
		left++
		nums[left], nums[right] = nums[right], nums[left]
	}
	return left + 1
}
