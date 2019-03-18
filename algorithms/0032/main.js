/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let max = 0
  const record = Array.apply(null, { length: s.length }).fill(0)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ')') {
      let j = i - 1
      while (j >= 0) {
        if (s[j] === '(' && record[j] === 0) {
          record[i] = 1
          record[j] = 1
          break
        }
        j--
      }
    }
  }

  let tmp = 0
  for (const v of record) {
    if (v === 0) {
      tmp = 0
      continue
    }
    tmp++
    if (tmp > max) {
      max = tmp
    }
  }
  return max
}

module.exports = longestValidParentheses
