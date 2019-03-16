/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  // 以堆栈的形式来处理
  const stack = []
  for (let i = 0; i < s.length; i++) {
    // 栈里存对应字符的 Unicode location
    switch (s[i]) {
      // ( 与 ) 相差 1
      case '(':
        stack.push(s.charCodeAt(i) + 1)
        break
      // [ ], { } 之间相差 2
      case '[':
      case '{':
        stack.push(s.charCodeAt(i) + 2)
        break
      case ')':
      case ']':
      case '}':
        if (stack.length > 0 && s.charCodeAt(i) === stack[stack.length - 1]) {
          stack.pop()
        } else {
          return false
        }
      default:
        break
    }
  }
  return stack.length === 0
}

module.exports = isValid
