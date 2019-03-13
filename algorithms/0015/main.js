/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const sortNums = nums.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < sortNums.length; i++) {
    // 避免添加重复的结果
    if (i > 0 && sortNums[i] === sortNums[i - 1]) {
      continue
    }

    let l = i + 1
    let r = sortNums.length - 1
    while (l < r) {
      const sum = sortNums[i] + sortNums[l] + sortNums[r]
      if (sum > 0) {
        r -= 1
      } else if (sum < 0) {
        l += 1
      } else {
        result.push([sortNums[i], sortNums[l], sortNums[r]])
        // 计算下一次的 l, r
        const tmp = next(sortNums, l, r)
        l = tmp[0]
        r = tmp[1]
      }
    }
  }
  return result
}

function next(sort, l, r) {
  while (l < r) {
    if (sort[l] === sort[l + 1]) {
      l++
    } else if (sort[r] === sort[r - 1]) {
      r--
    } else {
      l += 1
      r -= 1
      return [l, r]
    }
  }
  return [l, r]
}

module.exports = threeSum
