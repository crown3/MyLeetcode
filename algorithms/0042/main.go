package p0042

func trap(height []int) int {
	length := len(height)
	if length <= 2 {
		return 0
	}

	left, right := make([]int, length), make([]int, length)

	left[0], right[length-1] = height[0], height[length-1]

	for i := 1; i < length; i++ {
		// left[i] 是 height[:i+1] 中的最大值
		// right[i] 是 height[i:] 中的最大值
		left[i] = bigger(left[i-1], height[i])
		right[length-1-i] = bigger(right[length-i], height[length-1-i])
	}

	water := 0
	for i := 0; i < length; i++ {
		// 每个点存水量取决于 这个点 对应的 从左至右 以及 从右到左 的最大高度差 再减去自己本身的高度
		water += smaller(left[i], right[i]) - height[i]
	}

	return water
}

func bigger(a int, b int) int {
	if a > b {
		return a
	}
	return b
}

func smaller(a int, b int) int {
	if a < b {
		return a
	}
	return b
}
