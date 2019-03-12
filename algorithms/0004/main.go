package p0004

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	return getMedian(combineNums(nums1, nums2))
}

func combineNums(nums1, nums2 []int) []int {
	len1, i, len2, j := len(nums1), 0, len(nums2), 0
	result := make([]int, len1+len2)
	for k := 0; k < len1+len2; k++ {
		if j == len2 || (i < len1 && j < len2 && nums1[i] <= nums2[j]) {
			result[k] = nums1[i]
			i++
		} else if i == len1 || (i < len1 && j < len2 && nums1[i] > nums2[j]) {
			result[k] = nums2[j]
			j++
		}
	}
	return result
}

func getMedian(nums []int) float64 {
	if l := len(nums); l != 0 {
		if l%2 != 0 {
			return float64(nums[l/2])
		}
		return float64(nums[l/2-1]+nums[l/2]) / 2.0
	}
	panic("the length of slice is 0, no result")
}
