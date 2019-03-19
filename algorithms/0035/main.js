/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let i = 0
  while (i < nums.length && nums[i] <= target) {
    if (nums[i] === target) {
      return i
    }
    i += 1
  }
  return i
}

module.exports = searchInsert
