/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  const len = height.length
  if (len < 2) {
    return 0
  }

  const left = []
  const right = []
  left[0] = height[0]
  right[len - 1] = height[len - 1]

  for (let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], height[i])
    right[len - i - 1] = Math.max(right[len - i], height[len - i - 1])
  }

  let water = 0
  for (let i = 0; i < len; i++) {
    water += Math.min(left[i], right[i]) - height[i]
  }
  return water
}

module.exports = trap
