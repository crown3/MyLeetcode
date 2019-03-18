/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // left 指向第一个值为 val 的 index
  // right 指向最后一个值不为 val 的 index
  let left = 0
  let right = nums.length - 1
  while (true) {
    while (left < nums.length && nums[left] !== val) {
      left++
    }
    while (right >= 0 && nums[right] === val) {
      right--
    }
    if (left >= right) {
      break
    }
    const tmp = nums[left]
    nums[left] = nums[right]
    nums[right] = tmp
  }
  return left
}

module.exports = removeElement
