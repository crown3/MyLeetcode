/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  // 直接在原来的数组上面修改其 num 的位置即可
  let left = 0
  let right = 1
  const len = nums.length
  for (; right < len; right++) {
    if (nums[left] === nums[right]) {
      continue
    }
    left++
    const tmp = nums[left]
    nums[left] = nums[right]
    nums[right] = tmp
  }
  return left + 1
}

module.exports = removeDuplicates
