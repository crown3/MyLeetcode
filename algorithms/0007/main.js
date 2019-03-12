/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let sign
  if (x < 0) {
    sign = -1
    x = -x
  } else {
    sign = 1
  }
  let result = 0
  while (x > 0) {
    const tmp = x % 10
    result = result * 10 + tmp
    x = Math.floor(x / 10)
  }
  const MAX_INT = 2147483647
  return result > MAX_INT ? 0 : result * sign
}

module.exports = reverse
