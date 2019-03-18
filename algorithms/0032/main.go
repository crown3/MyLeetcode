package p0032

func longestValidParentheses(s string) int {
	// record 最后显示为 [0,1,1,0,1,1,1,1,0] 这种格式数据, 其中连着的 1 表示这一段的字符串是可闭合区间
	max, record := 0, make([]int, len(s))
	for i, v := range s {
		if v == ')' {
			j := i - 1
			for j >= 0 {
				// 找到最近的一个未被占用的 (
				if s[j] == '(' && record[j] == 0 {
					record[i], record[j] = 1, 1
					break
				}
				j--
			}
		}
	}

	tmp := 0
	for _, v := range record {
		if v == 0 {
			tmp = 0
			continue
		}
		tmp++
		if tmp > max {
			max = tmp
		}
	}

	return max
}
