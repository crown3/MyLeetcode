/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  const rotateIdx = findRotateIdx(nums)
  const len = nums.length
  let left = 0
  let right = len - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const rotateMid = (rotateIdx + mid) % len
    if (nums[rotateMid] < target) {
      left = mid + 1
    } else if (target < nums[rotateMid]) {
      right = mid - 1
    } else {
      return rotateMid
    }
  }
  return -1
}
function findRotateIdx(nums) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = Math.floor((l + r) / 2)
    nums[r] < nums[mid] ? (l = mid + 1) : (r = mid)
  }
  return l
}
module.exports = search
