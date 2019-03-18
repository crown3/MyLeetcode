/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const hLen = haystack.length
  const nLen = needle.length
  for (let i = 0; i <= hLen - nLen; i++) {
    if (haystack.substr(i, nLen) === needle) {
      return i
    }
  }
  return -1
}

module.exports = strStr
