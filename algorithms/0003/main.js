/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const location = new Array(256)
  for (let index = 0; index < location.length; index++) {
    location[index] = -1
  }
  let maxLen = 0
  let left = 0
  for (let index = 0; index < s.length; index++) {
    if (location[s[index]] >= left) {
      left = location[s[index]] + 1
    } else if (index + 1 - left > maxLen) {
      maxLen = index + 1 - left
    }
    location[s[index]] = index
  }
  return maxLen
}

lengthOfLongestSubstring('aaaaa')
