/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const result = []
  const bytes = []
  function dfs(left, right, i, bytes) {
    if (left === 0 && right === 0) {
      result.push(bytes.join(''))
      return
    }
    if (left > 0) {
      bytes[i] = '('
      dfs(left - 1, right, i + 1, bytes)
    }
    if (right > 0 && left < right) {
      bytes[i] = ')'
      dfs(left, right - 1, i + 1, bytes)
    }
  }
  dfs(n, n, 0, bytes)

  return result
}

module.exports = generateParenthesis
