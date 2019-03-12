/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  if (s.length < 2) {
    return s
  }
  let begin = 0
  let maxLen = 1
  for (let i = 0; i < s.length; ) {
    if (s.length - i <= Math.floor(maxLen / 2)) {
      break
    }

    let b = i
    let e = i
    while (e < s.length - 1 && s[e + 1] === s[e]) {
      e++
    }

    i = e + 1

    while (e < s.length - 1 && b > 0 && s[e + 1] === s[b - 1]) {
      e++
      b--
    }

    const newLen = e + 1 - b
    if (newLen > maxLen) {
      begin = b
      maxLen = newLen
    }
  }

  return s.slice(begin, begin + maxLen)
}

module.exports = longestPalindrome
