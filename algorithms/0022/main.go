package p0022

func generateParenthesis(n int) []string {
	result := make([]string, 0, n*n)
	bytes := make([]byte, n*2)
	dfs(n, n, 0, bytes, &result)
	return result
}

func dfs(left, right, i int, bytes []byte, result *[]string) {
	// 所有符号都添加完毕
	if left == 0 && right == 0 {
		*result = append(*result, string(bytes))
		return
	}
	// ( 不用担心匹配问题
	// 只要 left > 0 就可以直接添加
	if left > 0 {
		bytes[i] = '('
		dfs(left-1, right, i+1, bytes, result)
	}

	// 想要添加 ) 时
	// 需要 left < right,
	// 即在 bytes[:i] 至少要有一个 ( 可以与这个) 匹配
	if right > 0 && left < right {
		bytes[i] = ')'
		dfs(left, right-1, i+1, bytes, result)
	}
}
