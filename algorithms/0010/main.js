/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  const sSize = s.length
  const pSize = p.length

  const dp = Array.apply(null, { length: sSize + 1 }).map(() =>
    Array.apply(null, { length: pSize + 1 }).fill(false)
  )
  dp[0][0] = true

  for (let j = 1; j < pSize && dp[0][j - 1]; j += 2) {
    if (p[j] === '*') {
      dp[0][j + 1] = true
    }
  }

  for (let i = 0; i < sSize; i++) {
    for (let j = 0; j < pSize; j++) {
      if (p[j] === '.' || p[j] === s[i]) {
        dp[i + 1][j + 1] = dp[i][j]
      } else if (p[j] === '*') {
        if (p[j - 1] !== s[i] && p[j - 1] !== '.') {
          dp[i + 1][j + 1] = dp[i + 1][j - 1]
        } else {
          dp[i + 1][j + 1] = dp[i + 1][j - 1] || dp[i + 1][j] || dp[i][j + 1]
        }
      }
    }
  }

  return dp[sSize][pSize]
}

module.exports = isMatch
