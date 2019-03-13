/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  if (nums.length <= 3) {
    return nums.reduce((acc, cur) => {
      acc += cur
      return acc
    }, 0)
  }
  nums = nums.sort((a, b) => a - b)
  let result = Number.POSITIVE_INFINITY

  for (let i = 0; i < nums.length; i++) {
    // 减少不必要的循环
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1
    let r = nums.length - 1
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r]
      if (sum === target) {
        return sum
      }
      const tmp = Math.abs(result - target)
      if (sum < target) {
        if (target - sum < tmp) {
          result = sum
        }
        l++
      } else if (sum > target) {
        if (sum - target < tmp) {
          result = sum
        }
        r--
      }
    }
  }
  return result
}

module.exports = threeSumClosest
