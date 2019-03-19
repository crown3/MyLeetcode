/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let i = 0
  let count = 0
  let end = nums.length - 1
  let nextI = 0
  let maxNextI = 0
  let maxI = 0
  while (i < end) {
    if (i + nums[i] >= end) {
      return count + 1
    }
    nextI = i + 1
    maxNextI = i + nums[i]
    while (nextI <= maxNextI) {
      if (nextI + nums[nextI] > maxI) {
        maxI = nextI + nums[nextI]
        i = nextI
      }
      nextI++
    }
    count++
  }
  return count
}

module.exports = jump
