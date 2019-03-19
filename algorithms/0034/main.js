/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const index = search(nums, target)
  if (index === -1) {
    return [-1, -1]
  }

  let first = index
  while (true) {
    const tmp = search(nums.slice(0, first), target)
    if (tmp === -1) {
      break
    }
    first = tmp
  }

  let last = index
  while (true) {
    const tmp = search(nums.slice(last + 1), target)
    if (tmp === -1) {
      break
    }
    last += tmp + 1
  }

  return [first, last]
}

function search(nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = Math.floor((l + r) / 2)
    if (nums[mid] > target) {
      r = mid - 1
    } else if (nums[mid] < target) {
      l = mid + 1
    } else {
      return mid
    }
  }
  return -1
}

module.exports = searchRange
