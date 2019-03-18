/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  // 从右边开始往左遍历, 先找到一段递减的数列
  let left = nums.length - 2
  while (0 <= left && nums[left] >= nums[left + 1]) {
    left -= 1
  }
  // 此时 nums[left+1:] 是一个 递减 数列
  reverse(nums, left + 1)

  if (left === -1) {
    return
  }

  // 此时 nums[left+1:] 是一个递增数列

  const right = search(nums, left + 1, nums[left])
  ;[nums[left], nums[right]] = [nums[right], nums[left]]
}

// 逆转 nums[l:]
function reverse(nums, l) {
  let r = nums.length - 1
  while (l < r) {
    ;[nums[l], nums[r]] = [nums[r], nums[l]]
    l += 1
    r -= 1
  }
}

// 返回 nums[l:] 中 > target 的最小值的索引号
// a[l:] 是一个 递增 数列
function search(nums, l, target) {
  let r = nums.length - 1
  l -= 1
  while (l + 1 < r) {
    const mid = Math.floor((l + r) / 2)
    target < nums[mid] ? (r = mid) : (l = mid)
  }
  return r
}
