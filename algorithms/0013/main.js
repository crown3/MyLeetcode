/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let result = 0
  let last = 0
  for (let i = s.length - 1; i >= 0; i--) {
    let tmp = map[s[i]]
    let sign = 1
    if (tmp < last) {
      sign = -1
    }
    result += sign * tmp
    last = tmp
  }
  return result
}

module.exports = romanToInt
