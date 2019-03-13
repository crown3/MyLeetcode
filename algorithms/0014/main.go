package p0014

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	shortestStr := strs[0]
	for _, str := range strs {
		if len(str) < len(shortestStr) {
			shortestStr = str
		}
	}

	for i := 0; i < len(shortestStr); i++ {
		for j := 0; j < len(strs); j++ {
			if strs[j][i] != shortestStr[i] {
				return shortestStr[:i]
			}
		}
	}
	return shortestStr
}
