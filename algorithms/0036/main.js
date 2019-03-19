/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if (checkSq(board) && checkRow(board) && checkCol(board)) {
    return true
  }
  return false
}

function checkSq(board) {
  for (let pod = 0; pod < 9; pod++) {
    const nums = []
    const row = Math.floor(pod / 3) * 3
    const col = (pod % 3) * 3

    for (let drow = 0; drow < 3; drow++) {
      for (let dcol = 0; dcol < 3; dcol++) {
        const n = board[row + drow][col + dcol]
        if (n === '.') {
          continue
        }
        if (nums[n]) {
          return false
        }
        nums[n] = true
      }
    }
  }
  return true
}

function checkRow(board) {
  for (let i = 0; i < 9; i++) {
    const nums = []
    for (let j = 0; j < 9; j++) {
      const n = board[i][j]
      if (n === '.') {
        continue
      }
      if (nums[n]) {
        return false
      }
      nums[n] = true
    }
  }
  return true
}

function checkCol(board) {
  for (let i = 0; i < 9; i++) {
    const nums = []
    for (let j = 0; j < 9; j++) {
      const n = board[j][i]
      if (n === '.') {
        continue
      }
      if (nums[n]) {
        return false
      }
      nums[n] = true
    }
  }
  return true
}

module.exports = isValidSudoku
