/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  let [signM, absM] = analysis(dividend)
  let [signN, absN] = analysis(divisor)

  let result = d(absM, absN, 1)[0]
  if (signM !== signN) {
    result = result - result - result
  }
  if (result < -2147483648 || result > 2147483647) {
    return 2147483647
  }
  return result
}

function analysis(num) {
  return num < 0 ? [-1, num - num - num] : [1, num]
}
function d(m, n, count) {
  if (m < n) {
    return [0, m]
  } else if (n <= m && m < n + n) {
    return [count, m - n]
  } else {
    const [result, remainder] = d(m, n + n, count + count)
    return remainder >= n
      ? [result + count, remainder - n]
      : [result, remainder]
  }
}

module.exports = divide
