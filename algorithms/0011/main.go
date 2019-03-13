package p0011

func maxArea(height []int) int {
	max, i, j := 0, 0, len(height)-1
	for i < j {
		a, b := height[i], height[j]

		var area int
		if a < b {
			area = (j - i) * a
		} else {
			area = (j - i) * b
		}

		if area > max {
			max = area
		}

		if a < b {
			i++
		} else {
			j--
		}
	}

	return max
}
