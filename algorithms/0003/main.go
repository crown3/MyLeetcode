package p0003

func lengthOfLongestSubstring(s string) int {
	locations := [256]int{} // 只有256长是因为假定输入的字符串只有ASCII字符
	for i := range locations {
		locations[i] = -1 // 先设置所有的字符都没有见过
	}

	maxLen, left := 0, 0

	for i := 0; i < len(s); i++ {
		if locations[s[i]] >= left {
			left = locations[s[i]] + 1 // 在s[left:i+1]中去除s[i]字符及其之前的部分
		} else if i+1-left > maxLen {
			// fmt.Println(s[left:i+1])
			maxLen = i + 1 - left
		}
		locations[s[i]] = i
	}

	return maxLen
}
