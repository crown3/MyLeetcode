/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const tmp = {}
  for (const s of strs) {
    const c = encode(s)
    if (!tmp[c]) {
      tmp[c] = []
    }
    tmp[c].push(s)
  }
  return Object.values(tmp)
}

const prime = [
  5,
  71,
  37,
  29,
  2,
  53,
  59,
  19,
  11,
  83,
  79,
  31,
  43,
  13,
  7,
  67,
  97,
  23,
  17,
  3,
  41,
  73,
  47,
  89,
  61,
  101,
]
function encode(s) {
  let result = 1
  for (let i = 0; i < s.length; i++) {
    result *= prime[s.charCodeAt(i) - 97]
  }
  return result
}

module.exports = groupAnagrams
