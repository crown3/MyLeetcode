package p0058

func lengthOfLastWord(s string) int {
	size := len(s)
	if size == 0 {
		return 0
	}

	result := 0
	for i := size - 1; i >= 0; i-- {
		if s[i] == ' ' {
			if result != 0 {
				return result
			}
			continue
		}
		result++
	}
	return result
}
