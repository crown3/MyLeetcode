/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const map = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const diff = target - num
    if (map[diff] !== undefined) {
      return [map[diff], i]
    } else {
      map[num] = i
    }
  }
}

module.exports = twoSum
