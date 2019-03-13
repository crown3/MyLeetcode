/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  // i, j 分别是边界的坐标, 求 (j-i)*min(height[i], height[j])的最大值
  // 从两边往中间搜索 效率更高
  let i = 0
  let j = height.length - 1
  let max = 0

  while (i < j) {
    const a = height[i]
    const b = height[j]

    const area = (j - i) * Math.min(a, b)

    if (area > max) {
      max = area
    }

    // 这里把整个数组遍历一遍即可, 这里挪动 i, j 可以根据其对应的值来决定
    // 例如 a < b , 那么我挪动 i 比挪动 j , area 的缩小概率会更低一些
    if (a < b) {
      i++
    } else {
      j--
    }
  }

  return max
}

module.exports = maxArea
