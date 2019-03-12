/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1 || s.length <= numRows) {
    return s
  }

  let result = ''
  const p = numRows * 2 - 2
  for (let i = 0; i < s.length; i += p) {
    result += s[i]
  }
  for (let j = 1; j <= numRows - 2; j++) {
    result += s[j]
    for (let k = p; k - j < s.length; k += p) {
      result += s[k - j]
      if (k + j < s.length) {
        result += s[k + j]
      }
    }
  }
  for (let r = numRows - 1; r < s.length; r += p) {
    result += s[r]
  }
  return result
}

module.exports = convert
