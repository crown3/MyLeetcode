package p0036

func isValidSudoku(board [][]byte) bool {
	if checkSq(board) && checkRow(board) && checkCol(board) {
		return true
	}
	return false
}

func checkSq(board [][]byte) bool {
	for pod := 0; pod < 9; pod++ {
		// 1-9, 0 不会被使用
		nums := [10]bool{}

		row := (pod / 3) * 3
		col := (pod % 3) * 3
		for drow := 0; drow < 3; drow++ {
			for dcol := 0; dcol < 3; dcol++ {
				n := convertToNumber(board[row+drow][col+dcol])
				if n < 0 {
					continue
				}
				if nums[n] {
					return false
				}
				nums[n] = true
			}
		}
	}

	return true
}

func checkRow(board [][]byte) bool {
	for i := 0; i < 9; i++ {
		nums := [10]bool{}
		for j := 0; j < 9; j++ {
			n := convertToNumber(board[i][j])
			if n < 0 {
				continue
			}
			if nums[n] {
				return false
			}
			nums[n] = true
		}
	}
	return true
}

func checkCol(board [][]byte) bool {
	for i := 0; i < 9; i++ {
		nums := [10]bool{}
		for j := 0; j < 9; j++ {
			n := convertToNumber(board[j][i])
			if n < 0 {
				continue
			}
			if nums[n] {
				return false
			}
			nums[n] = true
		}
	}
	return true
}

func convertToNumber(b byte) int {
	if b == '.' {
		return -1
	}
	return int(b - '0')
}
