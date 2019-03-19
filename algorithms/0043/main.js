/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0'
  }
  n1 = num1.split('')
  n2 = num2.split('')

  const result = Array.apply(null, { length: n1.length + n2.length }).fill(0)

  for (let i = n1.length - 1; i >= 0; i--) {
    for (let j = n2.length - 1; j >= 0; j--) {
      result[i + j + 1] += (n1[i] - '0') * (n2[j] - '0')
      if (result[i + j + 1] >= 10) {
        result[i + j] += Math.floor(result[i + j + 1] / 10)
        result[i + j + 1] %= 10
      }
    }
  }

  if (result[0] === 0) {
    result.splice(0, 1)
  }
  return result.join('')
}

module.exports = multiply
