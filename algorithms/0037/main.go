package p0037

func solveSudoku(board [][]byte) {
	// 使用递归来暴力枚举
	solve(board, 0)
}

/* k 是把 board 转换成一维数组后，元素的索引值 */
func solve(board [][]byte, k int) bool {
	if k == 81 {
		return true
	}

	row, col := k/9, k%9
	if board[row][col] != '.' {
		return solve(board, k+1)
	}

	// bi, bj 是 row, col 所在块的左上角元素的索引值
	bi, bj := row/3*3, col/3*3

	// 按照数独的规则, 检查 b 能否放在 board[row][col] 上面
	isValid := func(b byte) bool {
		for n := 0; n < 9; n++ {
			if board[row][n] == b || board[n][col] == b || board[bi+n/3][bj+n%3] == b {
				return false
			}
		}
		return true
	}

	for b := byte('1'); b <= '9'; b++ {
		if isValid(b) {
			board[row][col] = b
			if solve(board, k+1) {
				return true
			}
		}
	}

	board[row][col] = '.'

	return false
}
