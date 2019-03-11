/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 假设输入的只有 ASCII 码, 不初始化为 -1 是因为 undefined >= num => false
  const locations = Array.apply(null, { length: 256 })
  let maxLen = 0
  let left = 0
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i]
    if (locations[curChar] >= left) {
      left = locations[curChar] + 1
    } else if (i + 1 - left > maxLen) {
      maxLen = i + 1 - left
    }
    locations[curChar] = i
  }
  return maxLen
}

module.exports = lengthOfLongestSubstring
