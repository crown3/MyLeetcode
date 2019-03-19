/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let tmp = '1'
  while (n > 1) {
    tmp = say(tmp)
    n--
  }
  return tmp
}

function say(str) {
  let result = ''
  let [i, j] = [0, 1]
  while (i < str.length) {
    while (j < str.length && str[j] === str[i]) {
      j++
    }
    result += j - i + str[i]
    i = j
  }
  return result
}

module.exports = countAndSay
