const map = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
}
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) {
    return null
  }
  let result = ['']
  for (let i = 0; i < digits.length; i++) {
    const tmp = []
    for (let j = 0; j < result.length; j++) {
      for (let k = 0; k < map[digits[i]].length; k++) {
        tmp.push(result[j] + map[digits[i]][k])
      }
    }
    result = tmp
  }
  return result
}

module.exports = letterCombinations
