/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  solve(board, 0)
}

function solve(board, k) {
  if (k == 81) {
    return true
  }

  const row = Math.floor(k / 9)
  const col = k % 9
  if (board[row][col] !== '.') {
    return solve(board, k + 1)
  }

  const bi = Math.floor(row / 3) * 3
  const bj = Math.floor(col / 3) * 3

  function isValid(b) {
    for (let n = 0; n < 9; n++) {
      if (
        board[row][n] === b ||
        board[n][col] === b ||
        board[bi + Math.floor(n / 3)][bj + (n % 3)] === b
      ) {
        return false
      }
    }
    return true
  }

  for (let b = '1'; b <= '9'; b++) {
    if (isValid(b)) {
      board[row][col] = b + ''
      if (solve(board, k + 1)) {
        return true
      }
    }
  }
  board[row][col] = '.'
  return false
}
