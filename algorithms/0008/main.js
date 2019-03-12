/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.trim()
  let sign
  switch (str[0]) {
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      sign = 1
      break
    case '+':
      sign = 1
      str = str.slice(1)
      break
    case '-':
      sign = -1
      str = str.slice(1)
      break

    default:
      return 0
  }
  let result = 0
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    if (char >= '0' && char <= '9') {
      result = result * 10 + Number(char)
    } else {
      continue
    }
  }
  const MAX_INT32 = 2147483647
  if (result > MAX_INT32) {
    return sign > 0 ? MAX_INT32 : MAX_INT32 * sign - 1
  } else {
    return result * sign
  }
}

module.exports = myAtoi
