/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 排除个别情况
  if (strs.length < 2) {
    return strs[0] || ''
  }
  // 找到最短的字符串
  const shortestStr = strs.reduce((acc, cur, i) => {
    if (cur.length < acc.length) {
      acc = cur
    }
    return acc
  }, strs[0])
  for (let i = 0; i < shortestStr.length; i++) {
    const isEqual = strs.every(str => str[i] === shortestStr[i])
    if (!isEqual) {
      return shortestStr.slice(0, i)
    }
  }
  return shortestStr
}

module.exports = longestCommonPrefix
