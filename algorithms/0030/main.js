/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const sLen = s.length
  const result = []

  const wsLen = words.length
  if (sLen === 0 || wsLen === 0 || sLen < wsLen * words[0].length) {
    return result
  }

  let wLen = words[0].length

  const record = {}
  for (const w of words) {
    if (w.length !== wLen) {
      return result
    }
    record[w] = record[w] === undefined ? 1 : record[w] + 1
  }

  const remain = {}
  let [count, left, right] = [1, 0, 0]

  const reset = function() {
    if (count === 0) {
      return
    }
    Object.entries(record).forEach(([k, v]) => {
      remain[k] = v
    })
    count = 0
  }

  const moveLeft = function() {
    remain[s.slice(left, left + wLen)] += 1
    count -= 1
    left += wLen
  }

  for (let i = 0; i < wLen; i++) {
    let [left, right] = [i, i]
    reset()

    while (sLen - left >= wsLen * wLen) {
      const word = s.slice(right, right + wLen)
      const remainTimes = remain[word]
      if (remainTimes === undefined) {
        left = right + wLen
        right = right + wLen
        reset()
      } else if (remainTimes === 0) {
        moveLeft()
      } else {
        remain[word] -= 1
        count += 1
        right += wLen
        if (count === wsLen) {
          result.push(left)
          moveLeft()
        }
      }
    }
  }
  return result
}

module.exports = findSubstring
