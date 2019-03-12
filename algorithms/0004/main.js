/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  return getMedian(combineNums(nums1, nums2))
}

function combineNums(nums1, nums2) {
  const len1 = nums1.length
  const len2 = nums2.length
  const result = []
  let i = 0
  let j = 0
  for (let k = 0; k < len1 + len2; k++) {
    if (j === len2 || (i < len1 && j < len2 && nums1[i] <= nums2[j])) {
      result.push(nums1[i])
      i += 1
    } else if (i === len1 || (i < len1 && j < len2 && nums1[i] > nums2[j])) {
      result.push(nums2[j])
      j += 1
    }
  }
  return result
}
function getMedian(nums) {
  const len = nums.length
  if (len) {
    if (len % 2) {
      return nums[Math.floor(len / 2)]
    } else {
      return (nums[len / 2 - 1] + nums[len / 2]) / 2
    }
  } else {
    return null
  }
}

module.exports = findMedianSortedArrays
