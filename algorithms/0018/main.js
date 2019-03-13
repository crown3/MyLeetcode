/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const result = []
  // 排序后更有利于检索
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; i++) {
    // 减少无用的循环
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let l = j + 1
      let r = nums.length - 1
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r]
        if (sum < target) {
          l++
        } else if (sum > target) {
          r--
        } else {
          result.push([nums[i], nums[j], nums[l], nums[r]])
          const tmp = next(nums, l, r)
          l = tmp[0]
          r = tmp[1]
        }
      }
    }
  }
  return result
}

function next(nums, l, r) {
  while (l < r) {
    if (nums[l] === nums[l + 1]) {
      l++
    } else if (nums[r] === nums[r - 1]) {
      r--
    } else {
      l++
      r--
      return [l, r]
    }
  }
  return [l, r]
}

module.exports = fourSum
